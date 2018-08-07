"use strict";
const Constants = require ("../../../Constants");
const KaerveksTorchBase = require("../setVMA/KaerveksTorch");

class KaerveksTorch extends KaerveksTorchBase {
  constructor (game) {
    super(game, "Kaervek's Torch", "Mirage", "MIR");
  }
}

module.exports = KaerveksTorch;
