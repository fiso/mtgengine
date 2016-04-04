"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LastBreath extends Card {
  constructor(game) {
    super(game, "Last Breath", "Mercadian Masques", "MMQ");
  }
}

module.exports = LastBreath;
