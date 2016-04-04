"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GarruksPackleader extends Card {
  constructor(game) {
    super(game, "Garruk's Packleader", "Magic 2011", "M11");
  }
}

module.exports = GarruksPackleader;
