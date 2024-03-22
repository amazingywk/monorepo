import { INodeSchema } from './type';

const modules = import.meta.glob('./fields/*/snippets.ts');

export const getUnitComponentsMap = async () => {
  const unitComponentsMap: Record<string, INodeSchema> = {};
  for (const path in modules) {
    const module = await modules[path]();
    unitComponentsMap[module.schema.fieldType] = module.schema;
    // 这里的 module 就是你导入的模块
  }
  console.log('aaa', unitComponentsMap);

  return unitComponentsMap;
};
