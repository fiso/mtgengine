"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VodalianMerchant extends UnimplementedCard {
  constructor (game) {
    super(game, "Vodalian Merchant", "World Championship Decks 2001", "WC01");
  }
}

module.exports = VodalianMerchant;
