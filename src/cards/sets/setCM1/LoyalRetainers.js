"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LoyalRetainers extends UnimplementedCard {
  constructor (game) {
    super(game, "Loyal Retainers", "Commander's Arsenal", "CM1");
  }
}

module.exports = LoyalRetainers;
