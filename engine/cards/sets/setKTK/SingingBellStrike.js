"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SingingBellStrike extends Card {
  constructor(game) {
    super(game, "Singing Bell Strike", "Khans of Tarkir", "KTK");
  }
}

module.exports = SingingBellStrike;
