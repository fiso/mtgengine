"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KragmaButcher extends Card {
  constructor(game) {
    super(game, "Kragma Butcher", "Born of the Gods", "BNG");
  }
}

module.exports = KragmaButcher;
