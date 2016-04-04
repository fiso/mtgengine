"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MazeofIth extends Card {
  constructor(game) {
    super(game, "Maze of Ith", "From the Vault: Realms", "V12");
  }
}

module.exports = MazeofIth;
