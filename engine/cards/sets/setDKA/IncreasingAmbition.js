"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IncreasingAmbition extends Card {
  constructor(game) {
    super(game, "Increasing Ambition", "Dark Ascension", "DKA");
  }
}

module.exports = IncreasingAmbition;
