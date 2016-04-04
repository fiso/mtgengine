"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WillbenderBase = require("../setC14/Willbender.js");

class Willbender extends WillbenderBase {
  constructor(game) {
    super(game, "Willbender", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = Willbender;
