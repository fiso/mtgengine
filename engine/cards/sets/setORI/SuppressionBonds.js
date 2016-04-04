"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SuppressionBonds extends Card {
  constructor(game) {
    super(game, "Suppression Bonds", "Magic Origins", "ORI");
  }
}

module.exports = SuppressionBonds;
