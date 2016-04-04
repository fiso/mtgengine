"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VirtuousCharge extends Card {
  constructor(game) {
    super(game, "Virtuous Charge", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = VirtuousCharge;
