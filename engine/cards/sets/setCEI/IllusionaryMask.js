"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IllusionaryMaskBase = require("../setCED/IllusionaryMask.js");

class IllusionaryMask extends IllusionaryMaskBase {
  constructor(game) {
    super(game, "Illusionary Mask", "International Collector's Edition", "CEI");
  }
}

module.exports = IllusionaryMask;
