"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MerchantofSecretsBase = require("../set8ED/MerchantofSecrets.js");

class MerchantofSecrets extends MerchantofSecretsBase {
  constructor(game) {
    super(game, "Merchant of Secrets", "Legions", "LGN");
  }
}

module.exports = MerchantofSecrets;
