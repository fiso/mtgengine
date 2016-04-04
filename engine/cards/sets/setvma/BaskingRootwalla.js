"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BaskingRootwallaBase = require("../setDD3_GVL/BaskingRootwalla.js");

class BaskingRootwalla extends BaskingRootwallaBase {
  constructor(game) {
    super(game, "Basking Rootwalla", "Vintage Masters", "VMA");
  }
}

module.exports = BaskingRootwalla;
