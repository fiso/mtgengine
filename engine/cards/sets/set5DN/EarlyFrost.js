"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EarlyFrost extends Card {
  constructor(game) {
    super(game, "Early Frost", "Fifth Dawn", "5DN");
  }
}

module.exports = EarlyFrost;
