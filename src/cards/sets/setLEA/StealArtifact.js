"use strict";
const Constants = require ("../../../Constants");
const StealArtifactBase = require("../set8ED/StealArtifact");

class StealArtifact extends StealArtifactBase {
  constructor (game) {
    super(game, "Steal Artifact", "Limited Edition Alpha", "LEA");
  }
}

module.exports = StealArtifact;
