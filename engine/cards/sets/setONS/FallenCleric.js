"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FallenCleric extends Card {
  constructor(game) {
    super(game, "Fallen Cleric", "Onslaught", "ONS");
  }
}

module.exports = FallenCleric;
