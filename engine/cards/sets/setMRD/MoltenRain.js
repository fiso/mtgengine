"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MoltenRain extends Card {
  constructor(game) {
    super(game, "Molten Rain", "Mirrodin", "MRD");
  }
}

module.exports = MoltenRain;
