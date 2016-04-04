"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KarnsTouch extends Card {
  constructor(game) {
    super(game, "Karn's Touch", "Mercadian Masques", "MMQ");
  }
}

module.exports = KarnsTouch;
