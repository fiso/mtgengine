"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UrborgEmissary extends UnimplementedCard {
  constructor(game) {
    super(game, "Urborg Emissary", "Invasion", "INV");
  }
}

module.exports = UrborgEmissary;
