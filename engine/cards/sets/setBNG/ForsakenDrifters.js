"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ForsakenDrifters extends Card {
  constructor(game) {
    super(game, "Forsaken Drifters", "Born of the Gods", "BNG");
  }
}

module.exports = ForsakenDrifters;
