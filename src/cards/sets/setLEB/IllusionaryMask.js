"use strict";
const Constants = require ("../../../Constants");
const IllusionaryMaskBase = require("../setCED/IllusionaryMask");

class IllusionaryMask extends IllusionaryMaskBase {
  constructor(game) {
    super(game, "Illusionary Mask", "Limited Edition Beta", "LEB");
  }
}

module.exports = IllusionaryMask;
