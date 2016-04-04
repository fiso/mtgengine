"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OpulentPalace extends Card {
  constructor(game) {
    super(game, "Opulent Palace", "Khans of Tarkir", "KTK");
  }
}

module.exports = OpulentPalace;
