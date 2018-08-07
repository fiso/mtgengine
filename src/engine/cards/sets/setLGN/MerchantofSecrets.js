"use strict";
const Constants = require ("../../../Constants");
const MerchantofSecretsBase = require("../setC17/MerchantofSecrets");

class MerchantofSecrets extends MerchantofSecretsBase {
  constructor (game) {
    super(game, "Merchant of Secrets", "Legions", "LGN");
  }
}

module.exports = MerchantofSecrets;
