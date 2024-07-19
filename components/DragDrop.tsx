"use client"

import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from '@hello-pangea/dnd';

const availableList = ["Id imposto", "Id CNAE", "Tbusuario Orgao Idusuario", "Tbusuario Idfornecedor", "Tbusuario Principal Idorgao Principal"]
const selectedList = ["Pago", "CNPJ Fornecedor", "Nome Fornecedor", "Data Emissão", "Numero Nota", "Valor Nota", "Aliq Retenção", "Valor Retenção", "Imprimir"]

const DragDrop: React.FC = () => {
  const [availableFields, setAvailableFields] = useState(availableList);
  const [selectedFields, setSelectedFields] = useState(selectedList);
  
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

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex">

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
                          snapshot.isDragging ? 'z-50' : ''
                        }`}
                        style={{
                          ...provided.draggableProps.style,
                          position: snapshot.isDragging ? 'fixed' : 'relative',
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
                className="w-full h-full p-4 pt-1 bg-gray-100 border border-gray-300 rounded-lg overflow-y-scroll relative"
              >
                {selectedFields.map((item, index) => (
                  <Draggable key={item} draggableId={item} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className={`p-2 mb-2 bg-white border border-gray-300 rounded-lg shadow-sm ${
                          snapshot.isDragging ? 'z-0 fixed' : ''
                        }`}
                        style={{
                          position: snapshot.isDragging ? 'fixed' : 'relative',
                          top: snapshot.isDragging ? '0' : 'auto',
                          left: snapshot.isDragging ? '0' : 'auto',
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
