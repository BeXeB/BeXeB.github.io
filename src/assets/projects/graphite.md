# Graphite

## About

Graphite is an object-oriented programming language designed to make the manipulation of graphs simpler. 
It also supports the visualization of Graphs with a DOT integration.

Originally developed as a university compiler project, Graphite was implemented from scratch, including a custom lexer, parser, type checker, and transpiler targeting C#.

---

## Features

- Object-oriented language (classes, inheritance, methods)
- Static typing
- Custom graph operation syntax
- First-class and higher-order functions
- Built-in graph primitives (directed and undirected graphs)
- Built-in Set, List types
- DOT export + GraphViz rendering for visualization

---

## Graph Operations

```
# Specify which graph to do the list of operations on
G {
  # Add a directed edge from vertices with predicate_1 to vertices with predicate_2 with weight 1.2
  [("tag" or "tag2") and "tag3"] => ["tag2"] 1.2;

  # Add an undirected edge from vertices with predicate_1 to vertices with predicate_2 with weight 2
  ["tag" or "tag2"] <=> ["tag2"] 2;

  # Remove edges between vertices with predicate_1 and vertices with predicate_2
  ["tag1"] =/= ["tag2"];

  # Remove vertices with predicate
  V - ["tag1"];

  # Add vertex with tags 12 times
  V + {"tag1", "tag2"} 12;

  # Add tags to vertices with predicate
  ["tag3"] ++ {"tag1", "tag2"};

  # Remove tags from vertices with predicate
  ["tag3"] -- {"tag1", "tag2"};

  # Remove tag
  "tag1" << null;

  # Retag tag1 to tag2
  "tag1" << "tag2";

  # Add another graph
  ++ G2;
};
```
---

## Showcase
### Graph operations showcase

Function that creates a bipartite graph:
```
bipartite(int n, int m) returns DGraph
{
  DGraph g = new DGraph();        # Creates a new Directed Graph
  g {                             # Using graph g
    V + {"Left"} n;               # Add n vertices with tag "Left"
    V + {"Right"} m;              # Add m vertices with tag "Right"
    ["Left"] <=> ["Right"];       # Connect all vertices that match the predicate of having the tag "Left" to
                                  # all vertices that match the predicate of having the tag "Right" in both directions
  };
  return g ;
}
```

An example of a binary tree:
```
bTree(int n) returns DGraph
{
  DGraph tree = new DGraph();
  if (n == 1)
  {
    tree {                        # Using graph tree
      V + {"Root"};               # Add node with tag "Root"
    };
    return tree;
  }

  DGraph sub1 = bTree(n - 1);     # Recursively call
  DGraph sub2 = bTree(n - 1);     # with depth - 1

  tree {                          # Using graph tree
    V + {"NewRoot"};              # Add a node with tag "NewRoot"
    ++ sub1;                      # Add graph sub1
    ++ sub2;                      # Add graph sub2
    ["NewRoot"] => ["Root"];      # Connect all vertices with tag "NewRoot" 
                                  # to all vertices with tag "Root"
    "Root" << null ;              # Remove tag "Root"
    "NewRoot" << "Root";          # Retag "NewRoot" to "Root"
  };
  return tree;
}
```
### Functions showcase

Function declaration is done as seen here:
```
add(int a, int b) returns int 
{
  return a + b;
}
```
Functions can be declared inside another function:
```
outer(int a) returns int
{
  inner() returns int { return 3; }
  return inner() + a + 2;
}
```

Since functions are first-class members, they can be stored in variables, passed as parameters, etc.:
```
# The type of this function is Func<int, Func<int, int>, int> (Func<return_type, param1_type, ...>)
applyFunction(Func<int, int> f, int a) returns int {
  return f(a);
}

# Returns the applyFunction function
getApplier() returns Func<int, Func<int, int>, int> {
  return applyFunction;
}

# A simple anonymous function stored as a value
Func<int,int> increment = (int a) => { return a + 1; };

# Example usage
int a = getApplier()(increment, 1);

# A set of functions
Set<Func<int,int>> set2 = {increment, outer};

```
### Classes and Methods showcase

A class declaration looks like this:
```
public class Counter
{
  public int value = 0;

  public Increment(int amount) returns int
  {
    value = value + amount;
    return value;
  }
}
```

Inheritance in Graphite is done with the extends keyword, and the subclasses can access members of the base class with the super keyword:
```
public class AdvancedCounter extends Counter
{
  public Reset() returns void
  {
    value = 0;
  }

  public GetBaseValue() returns int
  {
    return super.value;
  }
}
```

---

## Tech Stack
- C#
- DOT
- GraphViz

