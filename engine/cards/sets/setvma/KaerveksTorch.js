"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KaerveksTorchBase = require("../setMIR/KaerveksTorch.js");

class KaerveksTorch extends KaerveksTorchBase {
  constructor(game) {
    super(game, "Kaervek's Torch", "Vintage Masters", "VMA");
  }
}

module.exports = KaerveksTorch;
