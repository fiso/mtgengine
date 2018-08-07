"use strict";
const Constants = require ("../../../Constants");
const IllusionaryMaskBase = require("../setTD0/IllusionaryMask");

class IllusionaryMask extends IllusionaryMaskBase {
  constructor (game) {
    super(game, "Illusionary Mask", "Masters Edition III", "ME3");
  }
}

module.exports = IllusionaryMask;
