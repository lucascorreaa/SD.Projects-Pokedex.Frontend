declare module "*.html" {
  const content: string;
  export default content;
}

declare const System: {
  import: (module: string) => Promise<any>;
};
