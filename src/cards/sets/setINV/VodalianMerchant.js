"use strict";
const Constants = require ("../../../Constants");
const VodalianMerchantBase = require("../setWC01/VodalianMerchant");

class VodalianMerchant extends VodalianMerchantBase {
  constructor (game) {
    super(game, "Vodalian Merchant", "Invasion", "INV");
  }
}

module.exports = VodalianMerchant;
