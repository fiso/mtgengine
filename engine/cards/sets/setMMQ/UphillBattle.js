"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UphillBattle extends Card {
  constructor(game) {
    super(game, "Uphill Battle", "Mercadian Masques", "MMQ");
  }
}

module.exports = UphillBattle;
