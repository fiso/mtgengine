"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DrownedCatacombBase = require("../setM10/DrownedCatacomb.js");

class DrownedCatacomb extends DrownedCatacombBase {
  constructor(game) {
    super(game, "Drowned Catacomb", "Magic 2011", "M11");
  }
}

module.exports = DrownedCatacomb;
