"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MarduAscendancy extends Card {
  constructor(game) {
    super(game, "Mardu Ascendancy", "Khans of Tarkir", "KTK");
  }
}

module.exports = MarduAscendancy;
