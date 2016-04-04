"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThunderStrike extends Card {
  constructor(game) {
    super(game, "Thunder Strike", "Magic 2011", "M11");
  }
}

module.exports = ThunderStrike;
