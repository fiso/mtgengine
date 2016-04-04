"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShovingMatch extends Card {
  constructor(game) {
    super(game, "Shoving Match", "Mercadian Masques", "MMQ");
  }
}

module.exports = ShovingMatch;
