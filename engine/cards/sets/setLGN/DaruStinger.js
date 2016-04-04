"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DaruStinger extends Card {
  constructor(game) {
    super(game, "Daru Stinger", "Legions", "LGN");
  }
}

module.exports = DaruStinger;
