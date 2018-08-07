"use strict";
const Constants = require ("../../../Constants");
const GoblinVandalBase = require("../setPRM/GoblinVandal");

class GoblinVandal extends GoblinVandalBase {
  constructor (game) {
    super(game, "Goblin Vandal", "Weatherlight", "WTH");
  }
}

module.exports = GoblinVandal;
