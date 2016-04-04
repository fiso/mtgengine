"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ForgottenHarvest extends Card {
  constructor(game) {
    super(game, "Forgotten Harvest", "Prophecy", "PCY");
  }
}

module.exports = ForgottenHarvest;
