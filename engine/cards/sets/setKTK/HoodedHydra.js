"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HoodedHydra extends Card {
  constructor(game) {
    super(game, "Hooded Hydra", "Khans of Tarkir", "KTK");
  }
}

module.exports = HoodedHydra;
