"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MassofGhouls extends Card {
  constructor(game) {
    super(game, "Mass of Ghouls", "Future Sight", "FUT");
  }
}

module.exports = MassofGhouls;
