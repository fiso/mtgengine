"use strict";
const Constants = require ("../../../Constants");
const AlgaeGharialBase = require("../setMM2/AlgaeGharial");

class AlgaeGharial extends AlgaeGharialBase {
  constructor(game) {
    super(game, "Algae Gharial", "Shards of Alara", "ALA");
  }
}

module.exports = AlgaeGharial;
