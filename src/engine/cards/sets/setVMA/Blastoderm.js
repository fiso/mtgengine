"use strict";
const Constants = require ("../../../Constants");
const BlastodermBase = require("../setGVL/Blastoderm");

class Blastoderm extends BlastodermBase {
  constructor (game) {
    super(game, "Blastoderm", "Vintage Masters", "VMA");
  }
}

module.exports = Blastoderm;
