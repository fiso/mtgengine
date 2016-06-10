"use strict";
const Constants = require ("../../../Constants");
const BazaarofBaghdadBase = require("../setARN/BazaarofBaghdad");

class BazaarofBaghdad extends BazaarofBaghdadBase {
  constructor (game) {
    super(game, "Bazaar of Baghdad", "Vintage Masters", "VMA");
  }
}

module.exports = BazaarofBaghdad;
