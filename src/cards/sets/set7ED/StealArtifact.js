"use strict";
const Constants = require ("../../../Constants");
const StealArtifactBase = require("../setCED/StealArtifact");

class StealArtifact extends StealArtifactBase {
  constructor (game) {
    super(game, "Steal Artifact", "Seventh Edition", "7ED");
  }
}

module.exports = StealArtifact;
