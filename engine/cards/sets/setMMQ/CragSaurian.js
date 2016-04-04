"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CragSaurian extends Card {
  constructor(game) {
    super(game, "Crag Saurian", "Mercadian Masques", "MMQ");
  }
}

module.exports = CragSaurian;
