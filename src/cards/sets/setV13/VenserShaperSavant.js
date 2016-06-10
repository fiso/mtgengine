"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VenserShaperSavant extends UnimplementedCard {
  constructor (game) {
    super(game, "Venser, Shaper Savant", "From the Vault: Twenty", "V13");
  }
}

module.exports = VenserShaperSavant;
