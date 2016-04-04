"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BazaarofBaghdadBase = require("../setARN/BazaarofBaghdad.js");

class BazaarofBaghdad extends BazaarofBaghdadBase {
  constructor(game) {
    super(game, "Bazaar of Baghdad", "Vintage Masters", "VMA");
  }
}

module.exports = BazaarofBaghdad;
