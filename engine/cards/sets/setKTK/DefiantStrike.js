"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DefiantStrike extends Card {
  constructor(game) {
    super(game, "Defiant Strike", "Khans of Tarkir", "KTK");
  }
}

module.exports = DefiantStrike;
