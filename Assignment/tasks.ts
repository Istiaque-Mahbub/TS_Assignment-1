
function formatString(input: string, toUpper?: boolean): string{

    if(toUpper === false ){
        return input.toLowerCase();
    }
    return input.toUpperCase();
}

const value1 = formatString("Hello");          
const value2 = formatString("Hello", true);   
const value3 = formatString("Hello", false);  



type Book = { title: string; rating: number }[] ;

function filterByRating(items: Book): Book{
    
    let moreThanFourRating : Book = items.filter(item => item.rating >=4)

    return moreThanFourRating;
   
}
const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 4.0 },
    { title: "Book C", rating: 5.0 }
  ];
  
 

const result =  filterByRating(books); 


function concatenateArrays<T>(...arrays: T[][]): T[]{

    const newArray : T[] = arrays.reduce((previous : T[] , concatenateValue : T[]):T[]=>previous.concat(concatenateValue),[])

    return newArray;
}



class Vehicle{
    private make : string;
    private year : number;

    constructor(make:string,year:number){
        this.make = make;
        this.year = year;
    }

    getInfo(){
        console.log(`Make: ${this.make}, Year: ${this.year}`)
    }
}

class Car extends Vehicle {
    private model : string;

    constructor(make,year,model){
        super(make,year);
        this.model=model;
    }
    getModel(){
        console.log(`Model: ${this.model}`)
    }
}


  



function processValue(value: string | number): number{
   if(typeof(value)==='string'){
    return value.length;
   }
   return value*2
}

     


interface Product {
    name: string;
    price: number;
  }
  
  function getMostExpensiveProduct(products: Product[]): Product | null{
     if(products.length==0){
        return null;
     }

     const maxPrice = products.reduce((maximum ,current)=>maximum.price > current.price ? maximum : current)

     return maxPrice;
  }


  const products = [
    { name: "Pen", price: 100 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 100 }
  ];
  



enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  function getDayType(day: Day): string{
    if(day === Day.Saturday || day === Day.Sunday){
        return 'Weekend'
    }
    return 'WeekDay'
  }

  


  async function squareAsync(n: number): Promise<number>{
    const promise : Promise<number> = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(n<0){
                reject("Error: Negative number not allowed")
            }
            resolve(n*n)
        },1000);
    });

    return promise
  } 

  