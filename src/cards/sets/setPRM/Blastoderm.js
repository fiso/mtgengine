"use strict";
const Constants = require ("../../../Constants");
const BlastodermBase = require("../setGVL/Blastoderm");

class Blastoderm extends BlastodermBase {
  constructor (game) {
    super(game, "Blastoderm", "Magic Online Promos", "PRM");
  }
}

module.exports = Blastoderm;
