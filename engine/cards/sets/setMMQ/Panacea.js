"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Panacea extends Card {
  constructor(game) {
    super(game, "Panacea", "Mercadian Masques", "MMQ");
  }
}

module.exports = Panacea;
