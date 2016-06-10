"use strict";
const Constants = require ("../../../Constants");
const ZursWeirdingBase = require("../set6ED/ZursWeirding");

class ZursWeirding extends ZursWeirdingBase {
  constructor (game) {
    super(game, "Zur's Weirding", "Ninth Edition", "9ED");
  }
}

module.exports = ZursWeirding;
