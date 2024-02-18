import { h, render, ref } from 'vue';
// import { Modal } from '@ss/mtd-vue3';
import Modall from '../components/Modal.vue';
import { Modal as MtdModal, Button } from '@ss/mtd-vue3';

export const useDialog = () => {
  let num = 1;
  const createDialog = (component: any, id: string) => {
    const container = document.createElement('div', {});
    container.setAttribute('id', id);
    render(component, container);
    return container;
  }

  const openDialog = (component: any, options: any, title: string) => {
    const id = `dialog_id_${num++}`
    return new Promise((resolve, reject) => {
      try {
        const childComponent = h(component, {...options});
        // 1、创建一个虚拟节点
        const vnode = h(Modall, {}, childComponent);
        // 2、将虚拟节点render为真实节点
        const dialogDom = createDialog(vnode, id);
        // 3、将真实节点插入body中
        document.body.appendChild(dialogDom);
        resolve(id);
      } catch(error) {
        reject(error);
      }
    });
  }
  return {
      openDialog
  }
}