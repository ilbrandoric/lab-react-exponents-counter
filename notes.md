# Project Notes

## General Setup

```bash
npm install
npm run dev
```
---

## Create a state for the exponent 

const [exponent, setExponent] = useState(2);

## Pass props

Pass exponent as a prop to all Exponent components

<ExponentTwo exponent={exponent} />
<ExponentThree exponent={exponent} />
<ExponentFour exponent={exponent} />
<ExponentFive exponent={exponent} />
<ExponentSix exponent={exponent} />


In plain terms: This code passes data (exponent) from App.jsx to multiple child components.
From parent (App.jsx) - to -> child components <Exponent2, 3, 4, 5>

ExponentTwo   ← exponent = 2
ExponentThree← exponent = 2
ExponentFour ← exponent = 2
ExponentFive ← exponent = 2
ExponentSix  ← exponent = 2

Each component:

Receives the same input

Applies a different transformation

Produces a different result

This is classic functional thinking:

same input → different outputs



## What is lifting the state?

*Analogy*: Think of a family sharing one TV remote 📺.

The problem

You have two siblings (components).
Both need to know and change the TV channel (state).

If each sibling keeps their own remote, they’ll get out of sync:

One changes the channel the other doesn’t know about it.

That’s exactly what happens when multiple React components keep their own copy of the same state.

The solution: lift the state

You move the remote to the parent.
The parent component owns the state

The children ask the parent:

“What’s the current channel?”
“Please change the channel to 5”

In React terms:

State lives higher up
Data flows down as props

Changes flow up via functions
That’s lifting state up.

Very concrete React picture

❌ Each child has useState(count)

✅ Parent (App.jsx) has useState(count)

Parent passes:

count → to children
setCount → to children

Now everyone is in sync.

One-sentence definition

Lifting state means:

Move shared state to the closest common parent so multiple components can stay in sync.

When should you do it?

Lift state only when:

Two or more components need the same data
One component’s change should affect another

If not → keep state local.

---

## How this works in practice?


What “lifting state” means (in plain terms)

Lifting state means:

You move state up to the closest common parent so that multiple components can share and stay in sync with the same data.

In your case:

Counter needs to change the number

Exponent* components need to read the same number

Therefore, the state must live above all of them

That place is App.jsx.

Before lifting (the problem)

Originally, the situation looks like this conceptually:

Counter.jsx has its own useState

ExponentTwo, ExponentThree, etc. have hard-coded values

When the counter changes, exponents do not update

Why?

Each component is isolated

There is no shared source of truth

React does not allow sibling components to directly share state.

Step 1 — Move the state to App.jsx (the “lift”)

You created the state once, in the parent:

const [exponent, setExponent] = useState(2);


Now:

App owns the data

There is exactly one source of truth

All children depend on App

This is the key moment where the state is “lifted”.

Step 2 — Pass state down as props (read access)

You passed exponent to every component that needs to read it:

<Counter exponent={exponent} setExponent={setExponent} />

<ExponentTwo exponent={exponent} />
<ExponentThree exponent={exponent} />
<ExponentFour exponent={exponent} />
<ExponentFive exponent={exponent} />
<ExponentSix exponent={exponent} />


Important rule:

Data flows down

Children cannot “reach up” to get state

So the parent hands it down explicitly.

Step 3 — Pass the setter down only where mutation is needed

Only Counter is allowed to change the value, so it receives:

setExponent={setExponent}


This is intentional:

Exponent components are pure display

Counter is the controller

This keeps responsibilities clean.

---

```mermaid
flowchart TB
	App[App.jsx]\nstate: exponent\nsetter: setExponent
	Counter[Counter.jsx]\nprops: exponent, setExponent
	App -->|passes exponent| Counter
	Counter -->|invokes setExponent| App
```

Step 4 — Use the setter inside Counter.jsx

Inside Counter, you do not create state.

Instead, you receive it:

const Counter = ({ exponent, setExponent }) => {


And modify it like this:

const decrement = () => setExponent(prev => prev - 1);
const increment = () => setExponent(prev => prev + 1);


Key points:

Counter does not own the state

It only requests updates

App decides the new value

This is why React stays predictable.

Step 5 — Automatic re-rendering (the payoff)

When setExponent runs:

React updates state in App

App re-renders

New exponent is passed to:

Counter

All Exponent* components

UI updates everywhere in sync

No manual wiring.
No listeners.
No global variables.

Mental model (very important)

Think of it like this:

App = brain

Counter = remote control

Exponent* = screens

Only the brain stores memory.
Remotes can send commands.
Screens only display.

## Summary

We lifted the state by moving useState to App.jsx, passing the value down as props (data) to all components that need it. 