# Programmable Behaviours

## About

A Unity framework that allows developers to expose the internal logic of game objects, enabling players to modify behaviour directly through code.

The project was designed around the idea of teaching programming concepts through gameplay. The example game we developed allows the players to disable or rewrite defence systems such as turrets using scripts written inside the game.

---

## The Language

The system is built around a purpose-designed high-level language called See--, implemented from scratch with a full interpreter pipeline:

- Lexer: tokenizes player-written code  
- Parser: generates an abstract syntax tree  
- Resolver: performs scope + static type checking  
- Interpreter: executes scripts at runtime  

---

## Unity Integration

A key part of the project is the connection between the custom scripting language and Unity gameplay systems.

To enable player-written code to affect the game world, the project introduces an interface layer between the interpreter and Unity objects.

### Exposed Variables and Functions

Game objects (such as turrets and other defences) expose a controlled set of variables and callable methods to the scripting environment.

These are registered in the global scope, allowing scripts to directly interact with gameplay systems without accessing internal engine code.

### Event-Driven Behaviour Modification

Rather than hard-coding interactions, the system uses an event-based approach:

- Variable updates trigger `onChange` events  
- Function calls raise events that Unity components respond to  
- Object behaviour changes immediately during runtime  

This allows scripts to dynamically modify gameplay logic while keeping the underlying Unity code stable and secure.

### External Function Framework

To allow See-- scripts to interact with Unity objects, the project introduces an `ExternalFunction` system.

Each gameplay action that players can call (such as changing turret aim or disabling a defence) is implemented as a dedicated C# function class. These external functions are registered in the scripting environment’s global scope and act as a safe bridge between interpreted code and Unity behaviour.

This modular design makes it easy to expand the scripting API with new hackable behaviours without modifying the interpreter core.

---

## Showcase

### In-Game Code Editor

Players can interactively modify object logic using the embedded scripting language.

![In-Game Code Editor](/assets/images/programmable-behaviours-editor.png)

---

### Hackable Defence Systems

Defensive objects such as turrets expose programmable functions that players can override.

![Turret Behaviour Hacking](/assets/images/external.png)

---

### Runtime Feedback + Debugging

The editor provides syntax/runtime error reporting and visual feedback for learning.

![Console Output](/assets/images/error.png)

---

## Tech Stack

- Unity / C#  
- Custom scripting language (See--)  
- Lexer + Parser + Resolver + Interpreter architecture  
- Event-driven Unity integration via External Functions  
- In-game code editor with debugging tools
