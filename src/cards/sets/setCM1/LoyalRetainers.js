"use strict";
const Constants = require ("../../../Constants");
const LoyalRetainersBase = require("../setMP2/LoyalRetainers");

class LoyalRetainers extends LoyalRetainersBase {
  constructor (game) {
    super(game, "Loyal Retainers", "Commander's Arsenal", "CM1");
  }
}

module.exports = LoyalRetainers;
