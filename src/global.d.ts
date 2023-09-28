//allow use modules for scss files

declare module '*.scss' {
  interface IClassNames {
      [className: string]: string
  }
  const classNames: IClassNames;
  export = classNames;
}