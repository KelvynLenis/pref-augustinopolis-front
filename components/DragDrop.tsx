"use client"

import React, { useEffect, useState } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from '@hello-pangea/dnd';

interface Position {
  x: number;
  y: number;
}

interface DragDropProps {
  availableList: string[];
  selectedList: string[];
}

const DragDrop: React.FC<DragDropProps> = ({ availableList, selectedList }) => {
  const [availableFields, setAvailableFields] = useState(availableList);
  const [selectedFields, setSelectedFields] = useState(selectedList);
  const [cursorPosition, setCursorPosition] = useState<Position>({ x: 0, y: 0 });
  const [draggedItemInitialPosition, setDraggedItemInitialPosition] = useState<Position | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;

    let sourceItems = source.droppableId === 'column1' ? availableFields : selectedFields;
    let destinationItems = destination.droppableId === 'column1' ? availableFields : selectedFields;

    const [movedItem] = sourceItems.splice(source.index, 1);
    destinationItems.splice(destination.index, 0, movedItem);

    if (source.droppableId === 'column1') setAvailableFields([...sourceItems]);
    else setSelectedFields([...sourceItems]);

    if (destination.droppableId === 'column1') setAvailableFields([...destinationItems]);
    else setSelectedFields([...destinationItems]);
  };

  const onDragStart = (start: { source: { index: number } }) => {
    setIsDragging(true);

    // Captura a posição inicial do item arrastado
    const draggedItem = document.getElementById(start.source.index.toString());
    if (draggedItem) {
      const rect = draggedItem.getBoundingClientRect();
      setDraggedItemInitialPosition({
        x: rect.left,
        y: rect.top,
      });
    }
  };

   useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // console.log("x: ", event.clientX, "y: ", event.clientY);
    

      setCursorPosition({
        x: event.clientX,
        y: event.clientY < 250 ? event.clientY + 200 : event.clientY,
      });
    };

    const handleClick = (event: MouseEvent) => {
      console.log(`Mouse clicked at position: (${event.clientX}, ${event.clientY})`);
    };

    // window.addEventListener('click', handleClick);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
      <div className="flex gap-4">

        <div className="flex flex-col w-1/2">
          <h2 className="text-strong font-bold mb-2">Campos disponíveis</h2>

          <Droppable droppableId="column1">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="w-full h-full p-4 pt-1 bg-gray-100 border border-gray-300 rounded-lg overflow-y-scroll"
              >
                {availableFields.map((item, index) => (
                  <Draggable key={item} draggableId={item} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className={`p-2 mb-2 bg-white border border-gray-300 rounded-lg shadow-sm ${
                          snapshot.isDragging ? 'z-0' : ''
                        }`}
                        style={{
                          ...provided.draggableProps.style,
                          position: snapshot.isDragging ? 'absolute' : 'relative',
                          top: snapshot.isDragging ? `${(cursorPosition.y)-100}px` : 'auto',
                          left: snapshot.isDragging ? `${80}px` : 'auto',
                        }}
                      >
                        {item}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>

        <div className='flex flex-col w-1/2'>
          <h2 className="text-strong font-bold mb-2">Campos selecionados</h2>

          <Droppable droppableId="column2">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="w-full h-full p-4 pt-1 bg-gray-100 border border-gray-300 rounded-lg overflow-y-scroll"
              >
                {selectedFields.map((item, index) => (
                  <Draggable key={item} draggableId={item} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className={`p-2 mb-2 bg-white border border-gray-300 rounded-lg shadow-sm ${
                          snapshot.isDragging ? 'z-0' : ''
                        }`}
                        style={{
                          ...provided.draggableProps.style,
                          position: snapshot.isDragging ? 'fixed' : 'relative',
                          top: snapshot.isDragging ? `${(cursorPosition.y)-100}px` : 'auto',
                          left: snapshot.isDragging ? `${(cursorPosition.x)-(cursorPosition.x)+250}px` : 'auto',
                        }}
                      >
                        {item}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </div>
    </DragDropContext>
  );
};

export default DragDrop;
