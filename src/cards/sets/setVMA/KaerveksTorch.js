"use strict";
const Constants = require ("../../../Constants");
const KaerveksTorchBase = require("../setMIR/KaerveksTorch");

class KaerveksTorch extends KaerveksTorchBase {
  constructor (game) {
    super(game, "Kaervek's Torch", "Vintage Masters", "VMA");
  }
}

module.exports = KaerveksTorch;
