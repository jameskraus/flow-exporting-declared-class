# Example of Exporting a Declared Class

Originally posted as an example to [a question](https://stackoverflow.com/questions/49499758/how-do-you-define-and-import-a-class-type-in-flow) on StackOverflow

> Question:
>
> Is is possible to define a class type in a file, which gets explicitly imported in another?
>
> for example:
>
> `types.js`
>
>     export type MyType {
>       id: number,
>       name: string,
>     };
>
>     declare class MyOject {
>       constructor(): MyObject;
>       getStuff(param: number): MyType;
>       ...
>     }
>
> `main.js`
>
>     import type {MyObject, MyType} from './types.js'; // <- flow does now recognize MyObject
>     ....
>
> I want to be able to import it like in `main.js` but this violates flow since it doesn't recognize `MyObject` as a valid import.
>
>
> I've tried a few different solutions to no success:
>
> * changing `declare class` to `export class` results in flow errors
> * moving 'types.js' to a flow library folder means that I will have to import it from a flow module rather than the file itself.  This > breaks this files dependency on the flow types file.
>
> Is there a way to define a flow class type and import it explicitly from the file it's defined in?
