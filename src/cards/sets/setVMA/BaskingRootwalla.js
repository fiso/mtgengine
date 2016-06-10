"use strict";
const Constants = require ("../../../Constants");
const BaskingRootwallaBase = require("../setDD3_GVL/BaskingRootwalla");

class BaskingRootwalla extends BaskingRootwallaBase {
  constructor (game) {
    super(game, "Basking Rootwalla", "Vintage Masters", "VMA");
  }
}

module.exports = BaskingRootwalla;
