export interface INodeSchema {
  componentName: string;
  configure: {
    category: {
      group: string;
      title: string;
    };
  };
  [key: string]: unknown;
}
