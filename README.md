# Some differences between interfaces and types in TypeScript: 

In TypeScript, both interface and type can be used to define the shape of objects, but they have some important differences.

## Declaration 

```
interface Person {
  name: string;
}

interface Employee extends 
Person {
  employeeId: number;
}
```

```
type Person = {
  name: string;
};

type Employee = Person & {
  employeeId: number;
};
```
## Merging Declarations

```
interface Car {
  brand: string;
}

interface Car {
  model: string;
}

// Car is now { brand: string; model: string }

```
```
type Car = {
  brand: string;
};

type Car = { // Error: Duplicate identifier 'Car'
  model: string;
};

```

## Types can represent primitive types, unions, and tuples:

```
type StringOrNumber = string | number;

type Point = [number, number]; // Tuple type

```

## Functions
```
interface Greeter {
  (message: string): void;
}

type GreeterType = (message: string) => void;

```

# Difference between any, unknown, and never types in TypeScript:

### <span style="color: green"> Any Type </span>

Allows any value and disables type checking

```
let value: any;

value = 123;        
value = "hello";     
  
```

### <span style="color: green"> Unknown Type</span>

Also allows any value, but is type-safe.We must narrow it before using it.

```
let value: unknown;

value = "hello";
value = 42;

// value.toUpperCase(); // It will give an error
if (typeof value === "string") {
  console.log(value.toUpperCase()); //No Error
}
```

### <span style="color: green"> Never Type </span>


Functions that never return

```
function fail(message: string): never {
  throw new Error(message); // Never returns
}

```



