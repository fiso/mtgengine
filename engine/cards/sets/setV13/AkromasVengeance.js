"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AkromasVengeance extends UnimplementedCard {
  constructor(game) {
    super(game, "Akroma's Vengeance", "From the Vault: Twenty", "V13");
  }
}

module.exports = AkromasVengeance;
