"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BrutalSuppression extends Card {
  constructor(game) {
    super(game, "Brutal Suppression", "Prophecy", "PCY");
  }
}

module.exports = BrutalSuppression;
