"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VolcanicUpheaval extends Card {
  constructor(game) {
    super(game, "Volcanic Upheaval", "Battle for Zendikar", "BFZ");
  }
}

module.exports = VolcanicUpheaval;
