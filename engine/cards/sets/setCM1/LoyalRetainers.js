"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LoyalRetainers extends Card {
  constructor(game) {
    super(game, "Loyal Retainers", "Commander's Arsenal", "CM1");
  }
}

module.exports = LoyalRetainers;
