"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GoblinVandalBase = require("../setATH/GoblinVandal.js");

class GoblinVandal extends GoblinVandalBase {
  constructor(game) {
    super(game, "Goblin Vandal", "Weatherlight", "WTH");
  }
}

module.exports = GoblinVandal;
