"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinFlotilla extends Card {
  constructor(game) {
    super(game, "Goblin Flotilla", "Fallen Empires", "FEM");
  }
}

module.exports = GoblinFlotilla;
