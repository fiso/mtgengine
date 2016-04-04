"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TemurAscendancy extends Card {
  constructor(game) {
    super(game, "Temur Ascendancy", "Khans of Tarkir", "KTK");
  }
}

module.exports = TemurAscendancy;
