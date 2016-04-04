"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BrindleShoatBase = require("../setPC2/BrindleShoat.js");

class BrindleShoat extends BrindleShoatBase {
  constructor(game) {
    super(game, "Brindle Shoat", "Vintage Masters", "VMA");
  }
}

module.exports = BrindleShoat;
