"use strict";
const Constants = require ("../../../Constants");
const IllusionaryMaskBase = require("../setTD0/IllusionaryMask");

class IllusionaryMask extends IllusionaryMaskBase {
  constructor (game) {
    super(game, "Illusionary Mask", "Collectors’ Edition", "CED");
  }
}

module.exports = IllusionaryMask;
