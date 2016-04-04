"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WillbenderBase = require("../setC14/Willbender.js");

class Willbender extends WillbenderBase {
  constructor(game) {
    super(game, "Willbender", "Duel Decks: Jace vs. Chandra", "DD2");
  }
}

module.exports = Willbender;
