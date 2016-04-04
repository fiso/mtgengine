"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LoyalRetainersBase = require("../setCM1/LoyalRetainers.js");

class LoyalRetainers extends LoyalRetainersBase {
  constructor(game) {
    super(game, "Loyal Retainers", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = LoyalRetainers;
