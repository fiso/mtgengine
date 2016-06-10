"use strict";
const Constants = require ("../../../Constants");
const BlastodermBase = require("../setDD3_GVL/Blastoderm");

class Blastoderm extends BlastodermBase {
  constructor (game) {
    super(game, "Blastoderm", "Friday Night Magic", "pFNM");
  }
}

module.exports = Blastoderm;
