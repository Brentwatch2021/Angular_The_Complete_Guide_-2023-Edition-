# Angular The Complete Guide 2023 Edition

This udemy course can be found here [Angular 2023 Udemy Course](https://www.udemy.com/course/the-complete-guide-to-angular-2/)


## Notes 

## Section 1 Getting Started

What is Angular? 

Angular is a Javascript Framework which allows you to create reactive Single Page Applications.

Implemented [(ngModel)] one to pne binding also rememeber to import FormsModule from @angular/forms in the module used.


<h1>Installing bootstrap in angular to the project</h1>

@version

npm install --save bootstrap@3

head to angular.json and goto styles array
and add a new field "node_modules/bootstrap/dist/css/bootstrap.min.css"



## Section 2: The Basics

Angular Startup Sequence from Browser:

Index File is loaded with script imports
    -- inline.bundle.js
    -- polyfills.bundle.js
    -- styles.bundle.js
    -- vendor.bundle.js
    -- main.bundle.js

These script are executed
    -- main.bundle.js is executed first you can see this in your src folder in the 
       main.ts because the ts file gets compiled to the main.bundle.js file

    ```

    platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));

    ```

    --- AppModule has a bootstrap array that holds the AppComponent
        and sees the template html and logic files and loads this component
        into the body of the SPA

    ```

    bootstrap: [AppComponent]

    ```

    and finally angular app is displayed in browser.

    Components:
    Role of AppModule and component declaration

    ```

    // Declarations holds all the references to the APP
    declarations: [
        AppComponent,
        CustomCoponent
    ] 

    // add some other modules into this main module
    imports: [
        BrowserModule,
        FormsModule
    ]
    
    ```

    CLI: generates template, logic, style and testing file
        ng g c componentName 

    The above method adds an import automatically to the  app.module.ts

    Styles:

    ```
    // Multiple style files allowed
    styleUrls: ['./app.component.css','other style files ']

    ```

    selector of component in template as a attribute


    ```

    selector: [nameofComponent]

    //in template

    <div nameofComponent>

    ```

    selector of component as class

    ```
    selector: .nameofComponent

    <div class="nameofComponent">
    ```

    String Interpolation: coming from the logic file .ts

    ```
    // all interpolated strings must return a string 
    // ternary operators allowed
    <div> {{ isEnabled : 'enabled' ? 'disabled' }}
    ```

    Property Binding

    ```

    [propertyName]="valueInLogicFile"

    ```

    Event Binding 

    ```

    <div (click)="nameofFunctioninLogic($event)">

    ```

    Two Way Data Binding 

    ```

    // Note be sure to import the FormsModule in the app.module.ts file 
    <input [(ngModel)]="valuefromLogicFile"


    ```

    Directives

    Instructions for the DOM

    used as attribute

    ```
    <p appTurnGreen>
    ```

    Custom Directive

    ```

    @Directive({
        selector: 'appTurnGreen'
    })
    export class TurnGreenDirective
    {
        //logic
    }

    ```
    
    Structural Directive

    *ngIf

    ```
    // If it's false this element will not be added to the DOM otherwise it will be added
    <p *ngIf="isEnabled">
    ```

    *ngIf with else and using a marker
    ```
    <p *ngIf="isEnabled; else #noServerCreated">
    <ngTemplate #noServerCreated>
        <p>No Server was created
    </ngTemplate>
    ```

    ngStyle used with []

    ```

    <p [ngStyle]="{ backgroundColor: getColor() }">

    ```

    ngClass

    ```
    // online been the css class in the style of the 
    // component and the serverStatus been property on
    // logic of component
     <p [ngClass]="{online: serverStatus === 'online'}">
    ```

    *ngFor

    used to iterate over a list

    ```
    // List of persons
    people:person[];

    // in template
    <div *ngFor="let person of persons">
        <p>This is the person {{ person.name }}</p>
    </div>

## Section 5 

Custom property binding 

To allow a component to accept a custom value

```
.ts

// with alias 'srvElement'
@Input('srvElement') element:type

.html parent consuming 

[srvElement]="valuefromparent"
```

// using Output for event emitters allowing parent to 
@Output() handleClientFormSave = new EventEmitter();


```

View Encasulation 

Is the ability of Angular to encapsulate all the styles of a component and prevent the changes occuring on other
components

In order to overwrite this default behavior and allow styles applied in one component to apply to all
you can use the following property in the component:

```

@Component
{
    // This would remove the default ability of Angular
    encapsulation: ViewEncapsulation.None
    encapsulation: ViewEncapsulation.Emulated Default
    encapsulation: ViewEncapsulation.Native only applies to some browsers not trusted
}

Local References in template (Without ViewChild)

```

//Adding local references in the DOM
//Can only be used in the template ONLY template
// It can be passed to TS file via event
<input #elementref>

<element #elementref (click)="handleElement(elementref)">

// .ts file
// adding static typing for the html element coming through
handleElement(element:HTMLInputElement)

```  

Local References in template (With ViewChild)

```

.html
<input #inputelement>

.ts
// viewchild paramater refers to template name
@ViewChild('inputelement', {static: false}) inputElementReference: ElementRef;

// The above can be used in the ts file as follows
const itemName = this.inputElementReference.nativeElement.value;




Component LifeCycle 

```
// ngOnChanges Called after a property bound Input property changes can occur multiple times
ngOnChanges

// ngInit
// Runs after the constructor

// ngDoCheck runs when something changes used for change detection can run many times for rendering

// afterContentInit called after content (ng-content) has been projected into view

// ngAfterContentChecked called every time the projected content has been checked

// ngAfterViewChecked called every time the view (and child views) have been checked

// ngOnDestroy Called before the object is about to be destroyed
```

##Section 9 Dependacy Injection and Services

Allows for logic to be centrally managed in app

eg. a user service can be used to see what roles they belong to
and the dependacy injection allows for it to be dispersed anywhere in the Angular app.

```

@Component
providers: [LoggingService]

constructor(private loggingService:LoggingService)

// alternative using the inject keyword
this.loggingService = inject(LoggingService);

```

Hierarchal service only propagates down the tree of components and is a singleton instance per module

child service instances can ovveride parent instances

when removed from providers array in child then the parent instance is used instead

highest level instance is in module

```
// How to enable a service for injection service to inject into another service

@injectable

```


## Section 15 Forms

Two Approaches 

1. Template Driven
    Angular infers the Form Object from the DOM

2. Reactive
    Form is created programmatically and synchronized with the DOM


Template Driven Forms:

```

<input id="emailAddress" name="emailAddress" type="text" class="form-control" required>

```

The above code will not prevent the user from NOT entering text into this field.

```

valid: true

```

However if the input element is decorated with the ngModel attribute then it shall behave as desired.

```

<input id="emailAddress" name="emailAddress" type="text" class="form-control" ngModel required>

```

Then the valid attribute on the form will reflect the desired results if no text is entered and submitted
then the valid attribute will return false if no text is entered.

```

valid: false

```




## Section 33 Bonus: Typescript Introduction 

What is typescript?

A superset of vanilla javascript more features eg. Types, classses, interfaces and it gets compiled to javascript.

Changes javascript from dynamic typing to static typing 

Example:

function add(a,b)
{
    return a + b;
}

const result = add('2','5') In Plain vanilla javascript result will be '25'

as if it was in typeScript

function add(a:number,b:number)
{
    return a + b;
}


add('2','5')

in typescript the above method call will result in build time error 
preventing the need to find issue at runtime.


Base Types:

Primitives: number, string, boolean
Complex: arrays, objects
Function types, paramaters

Primatives

let age:number;

You can assign float types to number.
age = 12.1

however if you assign age = '' build time error

always use javascript primitive types by using lowercase string number not Number or String which points to Object and boolean

Arrays & Object Types


tells typescript you want string array
let hobbies: string[];


hobbies = ['Sports', 12] build time error as it is expecting string

Object Types

using the any type you basiclly back to normal javascript Defeating the purpose of
Typescript

let person: any;

```
person = {
    name: 'Max',
    age: 32
 };

```

Dont want to allow this.

```
person = {
    isEmployee: true 
}
```

Correct way

```
// Defining the properties of the type
let person: {
    name: string;
    age: number;
};

```

Below no errors on non strict mode

```
person = {
    name: 'Max',
    age: 32
 };

// Below error because of isEmployee not property of object set
person = {
    isEmployee: true 
}
```

array of persons:

let people: { name:string; age:number; }[];

will only type of person in the array


<h1> Type Inference</h1>

let course = 'Typescript course'

Typscript sets the type implicitly by default in this case it will set the value to string type.
Apparently you should avoid the below method

let course:string

and let TypeScript Do Type inference not sure If I agree with this I like to see what type it is even its redundant
like in the scenario below

let course = courseFromApi

in the above I dont know what type is coming from the API however in the below case:
let course:Course = courseFromAPI

<h1>Union Types</h1>

Allowing a variable to accept multiple types.

```

let course:string | number | boolean

// below will be allowed
course = 554

course = 'sdasd'

course = true;

```

Assigning Type Aliases:

much like a model class in model MVC

type comes from Typescript

```

type Person = {
    name: string;
    age:number;
}

let people:Person[];

```

<h1>Function and Types</h1>


Exmplicity setting the return type

```
function add(a:number,b:number):number
{
    // type infersion for the return type been number
    return a + b;
}


// Type Infersion will return void which is nothing

function printlayout(value:any):void
{
    console.log('test');
}

```

<h1>Generics</h1>

```

// When any type is defined it sets all input and output types to any
function insertAtBegining(array:any[],value:any)
{
    const newArray = [value,...array];
    return newArray
}


// However if you use generics T it allows typescript to use type inference 
function insertAtBegining<T>(array:T[],value:T)
{
    const newArray = [value,...array];
    return newArray
}

// when generics is used type inference can occur and implicity sets the array type full of 
// numbers however in above example all types are set exmplicity to any not Allowing Type Inference to occur
const demoArray = [1,2,3];

const updatedArray = insertAtBegining(demoArray, -1); // ability to call string methods on 
// indexed values like string.split[''] no more build time error but you will get compile time
// error
const stringArray = insertAtBegining(['a','b','c'], 'd');


```


<h1>Classes and Interfaces</h1>

```

class Student {
    firstName:string;
    lastName:string;
    age:number;
    courses:string[];

    constructor(first:string,
    last:string,
    age:number,
    private courses:string[])
    {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.courses = courses;
    }

    enrol(courseName:string)
    {
        this.courses.push(courseName);
    }

    listCourses()
    {
        return this.courses.slice();
    }


    // Short hand way to define classes properties and thier visibility
    constructor(public first:string,
    public last:string,
    public age:number,
    private courses:string[])

} 

const student = new Student('Max','Schwarz', 32, ['Angular']);

// By default all properties and methods are public by default
// it can be made private



```

<h1>Interfaces</h1>

```

// In typeScript the interface allow you to force other developers to
// implement properties and methods on  a class creating continuety in 
// the code base

interface Human{
    firstName:string;
    age:number;

    // states paramters and return type
    greet() => void;
}

let max:Human;

max = {
    firstName: 'Max',
    age: 32,

    greet() {
        console.log('Hello')
    }
};

// without implementation red lines under Instructor need to implement props and methods
class Instructor implements Human
{

}

```

tsConfig 

"strict" is on by default for the above examples you might need to disable it




