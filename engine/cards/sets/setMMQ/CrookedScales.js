"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CrookedScales extends Card {
  constructor(game) {
    super(game, "Crooked Scales", "Mercadian Masques", "MMQ");
  }
}

module.exports = CrookedScales;
