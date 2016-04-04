"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GoblinCavesBase = require("../setME4/GoblinCaves.js");

class GoblinCaves extends GoblinCavesBase {
  constructor(game) {
    super(game, "Goblin Caves", "The Dark", "DRK");
  }
}

module.exports = GoblinCaves;
