"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VodalianMerchant extends UnimplementedCard {
  constructor (game) {
    super(game, "Vodalian Merchant", "Invasion", "INV");
  }
}

module.exports = VodalianMerchant;
