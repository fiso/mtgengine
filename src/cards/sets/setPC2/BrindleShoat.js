"use strict";
const Constants = require ("../../../Constants");
const BrindleShoatBase = require("../setPCA/BrindleShoat");

class BrindleShoat extends BrindleShoatBase {
  constructor (game) {
    super(game, "Brindle Shoat", "Planechase 2012", "PC2");
  }
}

module.exports = BrindleShoat;
