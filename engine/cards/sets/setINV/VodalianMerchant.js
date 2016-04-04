"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VodalianMerchant extends Card {
  constructor(game) {
    super(game, "Vodalian Merchant", "Invasion", "INV");
  }
}

module.exports = VodalianMerchant;
