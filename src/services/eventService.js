import { getData, saveData } from './storageService';

// Adiciona um novo evento
export const addEvent = async (newPartialData) => {
  try {
    const events = await getData('events');
    const updatedEvents = [...events, { ...newPartialData }];
    await saveData('events', updatedEvents);
    console.log('Evento adicionado com sucesso!');
  } catch (error) {
    console.error('Erro ao adicionar evento:', error);
  }
};

// Atualiza o último evento
export const updateLastEvent = async (updatedFields) => {
  try {
    const events = await getData('events');
    if (events.length === 0) return false;

    const lastEvent = { ...events[events.length - 1], ...updatedFields };
    const updatedEvents = [...events.slice(0, -1), lastEvent];
    await saveData('events', updatedEvents);
    console.log('Último evento atualizado com sucesso!');
    return true;
  } catch (error) {
    console.error('Erro ao atualizar o evento:', error);
    return false;
  }
};

// Atualiza um evento específico pelo índice
export const editEvent = async (index, updatedFields) => {
  try {
    const events = await getData('events');
    if (index < 0 || index >= events.length) return false;

    events[index] = { ...events[index], ...updatedFields };
    await saveData('events', events);
    console.log('Evento editado com sucesso!');
    return true;
  } catch (error) {
    console.error('Erro ao editar o evento:', error);
    return false;
  }
};

export const removeEvent = async (index) => {
  try {
    const events = await getData('events');
    console.log('Eventos antes de remover:', events);
    console.log('Índice para remover:', index);
    const updatedEvents = events.filter((_, i) => i !== index);
    console.log('Eventos após remover:', updatedEvents);
    await saveData('events', updatedEvents);
    console.log('Evento removido com sucesso!');
  } catch (error) {
    console.error('Erro ao remover o evento:', error);
  }
};


