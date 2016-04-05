"use strict";
const Constants = require ("../../../Constants");
const StealArtifactBase = require("../setCED/StealArtifact");

class StealArtifact extends StealArtifactBase {
  constructor(game) {
    super(game, "Steal Artifact", "Revised Edition", "3ED");
  }
}

module.exports = StealArtifact;
