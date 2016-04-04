"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PeatBog extends Card {
  constructor(game) {
    super(game, "Peat Bog", "Mercadian Masques", "MMQ");
  }
}

module.exports = PeatBog;
