"use strict";
const Constants = require ("../../../Constants");
const ZursWeirdingBase = require("../set9ED/ZursWeirding");

class ZursWeirding extends ZursWeirdingBase {
  constructor (game) {
    super(game, "Zur's Weirding", "Eighth Edition", "8ED");
  }
}

module.exports = ZursWeirding;
