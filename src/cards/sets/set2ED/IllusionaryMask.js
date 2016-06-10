"use strict";
const Constants = require ("../../../Constants");
const IllusionaryMaskBase = require("../setCED/IllusionaryMask");

class IllusionaryMask extends IllusionaryMaskBase {
  constructor (game) {
    super(game, "Illusionary Mask", "Unlimited Edition", "2ED");
  }
}

module.exports = IllusionaryMask;
