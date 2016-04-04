"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ZursWeirdingBase = require("../set6ED/ZursWeirding.js");

class ZursWeirding extends ZursWeirdingBase {
  constructor(game) {
    super(game, "Zur's Weirding", "Eighth Edition", "8ED");
  }
}

module.exports = ZursWeirding;
