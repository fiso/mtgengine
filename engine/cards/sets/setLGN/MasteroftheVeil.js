"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MasteroftheVeil extends Card {
  constructor(game) {
    super(game, "Master of the Veil", "Legions", "LGN");
  }
}

module.exports = MasteroftheVeil;
