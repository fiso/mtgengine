"use strict";
const Constants = require ("../../../Constants");
const ZursWeirdingBase = require("../set9ED/ZursWeirding");

class ZursWeirding extends ZursWeirdingBase {
  constructor (game) {
    super(game, "Zur's Weirding", "Pro Tour Collector Set", "PTC");
  }
}

module.exports = ZursWeirding;
