"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HauntedCadaver extends Card {
  constructor(game) {
    super(game, "Haunted Cadaver", "Onslaught", "ONS");
  }
}

module.exports = HauntedCadaver;
