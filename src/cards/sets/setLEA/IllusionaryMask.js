"use strict";
const Constants = require ("../../../Constants");
const IllusionaryMaskBase = require("../setCED/IllusionaryMask");

class IllusionaryMask extends IllusionaryMaskBase {
  constructor (game) {
    super(game, "Illusionary Mask", "Limited Edition Alpha", "LEA");
  }
}

module.exports = IllusionaryMask;
