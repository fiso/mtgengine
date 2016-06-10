"use strict";
const Constants = require ("../../../Constants");
const StealArtifactBase = require("../setCED/StealArtifact");

class StealArtifact extends StealArtifactBase {
  constructor (game) {
    super(game, "Steal Artifact", "Eighth Edition", "8ED");
  }
}

module.exports = StealArtifact;
