"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ElephantGrass extends Card {
  constructor(game) {
    super(game, "Elephant Grass", "Visions", "VIS");
  }
}

module.exports = ElephantGrass;
