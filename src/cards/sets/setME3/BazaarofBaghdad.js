"use strict";
const Constants = require ("../../../Constants");
const BazaarofBaghdadBase = require("../setVMA/BazaarofBaghdad");

class BazaarofBaghdad extends BazaarofBaghdadBase {
  constructor (game) {
    super(game, "Bazaar of Baghdad", "Masters Edition III", "ME3");
  }
}

module.exports = BazaarofBaghdad;
