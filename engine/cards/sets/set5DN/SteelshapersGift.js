"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SteelshapersGift extends Card {
  constructor(game) {
    super(game, "Steelshaper's Gift", "Fifth Dawn", "5DN");
  }
}

module.exports = SteelshapersGift;
