"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CommonCause extends Card {
  constructor(game) {
    super(game, "Common Cause", "Mercadian Masques", "MMQ");
  }
}

module.exports = CommonCause;
