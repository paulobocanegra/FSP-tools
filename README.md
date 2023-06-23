# Fullstack Data Flow & Styling
#### Phase 1: Fullstack Data Flow
1. run `npm start` and go to the browser.
2. At `localhost:3000/` you will find a list of buttons. Each button represents the named function in your fullstack application (feel free to place debuggers on each one of them). When submiting the form to log in, what is the order in which these functions will run? Click the functions in the order we expect them to excecute. 
---

#### Phase 2: Fullstack CSS demo
1. At `localhost:3000/fsp-style` you will find a built ui for an e-commerce with a side bar. 
2. This UI is built in the following way:
    1. Whiteboard the layout of the page we are trying to build.
    2. Break the layout in components and their children.
    3. Build the top level components using vh & vw for height and width.
    4. Build the children components using % for height and width to make their size relative to their parents.
    5. Give semmantic  classes to the elements: `entity-wrapper` for the outmost element, `entity-container` to their children, `entity-component` to the `meat` of the component.
3. Check jsx & css files to understand how this approach. 

