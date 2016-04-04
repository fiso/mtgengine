"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RelicofProgenitusBase = require("../setMD1/RelicofProgenitus.js");

class RelicofProgenitus extends RelicofProgenitusBase {
  constructor(game) {
    super(game, "Relic of Progenitus", "Modern Masters", "MMA");
  }
}

module.exports = RelicofProgenitus;
