"use strict";
const Constants = require ("../../../Constants");
const TransmuteArtifactBase = require("../setME4/TransmuteArtifact");

class TransmuteArtifact extends TransmuteArtifactBase {
  constructor (game) {
    super(game, "Transmute Artifact", "Magic Online Promos", "PRM");
  }
}

module.exports = TransmuteArtifact;
