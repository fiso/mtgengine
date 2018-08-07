"use strict";
const Constants = require ("../../../Constants");
const LoyalRetainersBase = require("../setMP2/LoyalRetainers");

class LoyalRetainers extends LoyalRetainersBase {
  constructor (game) {
    super(game, "Loyal Retainers", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = LoyalRetainers;
