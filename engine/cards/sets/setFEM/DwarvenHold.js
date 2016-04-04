"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DwarvenHold extends Card {
  constructor(game) {
    super(game, "Dwarven Hold", "Fallen Empires", "FEM");
  }
}

module.exports = DwarvenHold;
