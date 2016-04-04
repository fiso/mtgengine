"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DwarvenCatapult extends Card {
  constructor(game) {
    super(game, "Dwarven Catapult", "Fallen Empires", "FEM");
  }
}

module.exports = DwarvenCatapult;
