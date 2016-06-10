"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WirewoodGuardian extends UnimplementedCard {
  constructor (game) {
    super(game, "Wirewood Guardian", "Scourge", "SCG");
  }
}

module.exports = WirewoodGuardian;
