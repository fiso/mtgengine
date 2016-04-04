"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NakedSingularityBase = require("../setICE/NakedSingularity.js");

class NakedSingularity extends NakedSingularityBase {
  constructor(game) {
    super(game, "Naked Singularity", "Masters Edition IV", "ME4");
  }
}

module.exports = NakedSingularity;
