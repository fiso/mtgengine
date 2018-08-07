"use strict";
const Constants = require ("../../../Constants");
const BrindleShoatBase = require("../setPCA/BrindleShoat");

class BrindleShoat extends BrindleShoatBase {
  constructor (game) {
    super(game, "Brindle Shoat", "Vintage Masters", "VMA");
  }
}

module.exports = BrindleShoat;
