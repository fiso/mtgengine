"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FountainofCho extends Card {
  constructor(game) {
    super(game, "Fountain of Cho", "Mercadian Masques", "MMQ");
  }
}

module.exports = FountainofCho;
