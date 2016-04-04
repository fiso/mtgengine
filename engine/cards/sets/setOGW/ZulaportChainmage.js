"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ZulaportChainmage extends UnimplementedCard {
  constructor(game) {
    super(game, "Zulaport Chainmage", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = ZulaportChainmage;
