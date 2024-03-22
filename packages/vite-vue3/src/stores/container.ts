import { INodeSchema } from '@/pages/container/material/type';
import { defineStore } from 'pinia';

class Dragon {}

interface IContainer {
  currentNodeId: string;
  nodeMap: INodeSchema[];
  dragonManager?: Dragon;
}

export const useContainer = defineStore('container', {
  state: (): IContainer => {
    return {
      currentNodeId: '',
      nodeMap: [],
      dragonManager: undefined,
    };
  },
  getters: {
    getCurrentNode(state) {
      return state.nodeMap.find((node) => node.id === state.currentNodeId);
    },
    getNodeById(state) {
      return (id: string) => {
        state.nodeMap.find((node) => node.id === id);
      };
    },
  },
  actions: {
    setCurrentNodeById(id: string) {
      this.currentNodeId = id;
    },
  },
});
