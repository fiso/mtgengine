"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EssenceFracture extends Card {
  constructor(game) {
    super(game, "Essence Fracture", "Onslaught", "ONS");
  }
}

module.exports = EssenceFracture;
