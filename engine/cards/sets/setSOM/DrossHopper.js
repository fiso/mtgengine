"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DrossHopper extends Card {
  constructor(game) {
    super(game, "Dross Hopper", "Scars of Mirrodin", "SOM");
  }
}

module.exports = DrossHopper;
