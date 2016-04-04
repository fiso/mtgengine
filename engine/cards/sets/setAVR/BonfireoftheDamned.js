"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BonfireoftheDamned extends UnimplementedCard {
  constructor(game) {
    super(game, "Bonfire of the Damned", "Avacyn Restored", "AVR");
  }
}

module.exports = BonfireoftheDamned;
