"use strict";
const Constants = require ("../../../Constants");
const NakedSingularityBase = require("../setME4/NakedSingularity");

class NakedSingularity extends NakedSingularityBase {
  constructor (game) {
    super(game, "Naked Singularity", "Ice Age", "ICE");
  }
}

module.exports = NakedSingularity;
