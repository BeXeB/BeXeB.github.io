# MontyBot

## About

MontyBot is an intelligent agent built to play full StarCraft II matches.

In order to achive that goal we identified four main challenges:

1. Economy managemet
2. Artmi production
3. Combat execution
4. Scouting to gather data

---

## Architecture

MontyBot is made up of different components, each with their separate responsibility.

### Monte Carlo Tree Search

The MCTS Selects the optimal construction and production actions based on the information available.

Sate representation includes:

- Resource counts
- Unit/Structure production pipelines
- Enemy/Self units and structures

### Combat Prediction Neural Network

The CPNN was trained to estimate encounter outcomes.

- Input: Unit Composition vectors + Encounter context
- Output: Win/Loss probabilities
- Dataset: ~18k combat rounds with outcomes per race
- Accuracy: ~86% across matchups

### Control Module

Executes the actions selected by the MCTS through the SC2 API.

It has different submodules:

- Construction Manager: Responsible for executing production and build actions
- Worker Manager: Responsible for efficient distribution of workers through the bases
- Army Manager: Responsible for executing attacking and defending actions
- Scouting Manager: Responsible for gathering information about the enemy
- Information Manager: Responsible for storing, inferring and providing information for other modules

---

## Results

MontyBot was evaluated in matches against other agents on [AI Arena](https://aiarena.net/).

- MontyBot is capable of playing full games of SC2
- Best-performing configuration achieved ~25% win rate in tournament play

---

## Tech Stack

- **C++**
- **Python**
- **PyTorch**
- **SC2 Api**
