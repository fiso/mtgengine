"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GuidingSpirit extends Card {
  constructor(game) {
    super(game, "Guiding Spirit", "Visions", "VIS");
  }
}

module.exports = GuidingSpirit;
