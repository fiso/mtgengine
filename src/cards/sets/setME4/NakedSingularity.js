"use strict";
const Constants = require ("../../../Constants");
const NakedSingularityBase = require("../setICE/NakedSingularity");

class NakedSingularity extends NakedSingularityBase {
  constructor (game) {
    super(game, "Naked Singularity", "Masters Edition IV", "ME4");
  }
}

module.exports = NakedSingularity;
