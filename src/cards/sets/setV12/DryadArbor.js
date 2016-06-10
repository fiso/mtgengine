"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DryadArbor extends UnimplementedCard {
  constructor (game) {
    super(game, "Dryad Arbor", "From the Vault: Realms", "V12");
  }
}

module.exports = DryadArbor;
