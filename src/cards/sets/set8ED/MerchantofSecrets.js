"use strict";
const Constants = require ("../../../Constants");
const MerchantofSecretsBase = require("../setC17/MerchantofSecrets");

class MerchantofSecrets extends MerchantofSecretsBase {
  constructor (game) {
    super(game, "Merchant of Secrets", "Eighth Edition", "8ED");
  }
}

module.exports = MerchantofSecrets;
