"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TemurBanner extends Card {
  constructor(game) {
    super(game, "Temur Banner", "Khans of Tarkir", "KTK");
  }
}

module.exports = TemurBanner;
