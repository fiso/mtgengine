"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DragonRoost extends Card {
  constructor(game) {
    super(game, "Dragon Roost", "Onslaught", "ONS");
  }
}

module.exports = DragonRoost;
