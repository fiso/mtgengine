"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ForgottenHarvest extends UnimplementedCard {
  constructor (game) {
    super(game, "Forgotten Harvest", "Prophecy", "PCY");
  }
}

module.exports = ForgottenHarvest;
