"use strict";
const Constants = require ("../../../Constants");
const MerchantofSecretsBase = require("../set8ED/MerchantofSecrets");

class MerchantofSecrets extends MerchantofSecretsBase {
  constructor (game) {
    super(game, "Merchant of Secrets", "Legions", "LGN");
  }
}

module.exports = MerchantofSecrets;
