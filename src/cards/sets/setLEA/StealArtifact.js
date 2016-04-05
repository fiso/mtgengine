"use strict";
const Constants = require ("../../../Constants");
const StealArtifactBase = require("../setCED/StealArtifact");

class StealArtifact extends StealArtifactBase {
  constructor(game) {
    super(game, "Steal Artifact", "Limited Edition Alpha", "LEA");
  }
}

module.exports = StealArtifact;
