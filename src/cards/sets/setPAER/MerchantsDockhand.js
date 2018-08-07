"use strict";
const Constants = require ("../../../Constants");
const MerchantsDockhandBase = require("../setAER/MerchantsDockhand");

class MerchantsDockhand extends MerchantsDockhandBase {
  constructor (game) {
    super(game, "Merchant's Dockhand", "Aether Revolt Promos", "PAER");
  }
}

module.exports = MerchantsDockhand;
