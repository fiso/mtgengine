"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VirtuousCharge extends UnimplementedCard {
  constructor(game) {
    super(game, "Virtuous Charge", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = VirtuousCharge;
