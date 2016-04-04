"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class QuagSickness extends Card {
  constructor(game) {
    super(game, "Quag Sickness", "Magic 2011", "M11");
  }
}

module.exports = QuagSickness;
