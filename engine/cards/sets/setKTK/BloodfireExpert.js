"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BloodfireExpert extends Card {
  constructor(game) {
    super(game, "Bloodfire Expert", "Khans of Tarkir", "KTK");
  }
}

module.exports = BloodfireExpert;
