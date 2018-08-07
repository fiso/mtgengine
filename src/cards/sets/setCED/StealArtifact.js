"use strict";
const Constants = require ("../../../Constants");
const StealArtifactBase = require("../set8ED/StealArtifact");

class StealArtifact extends StealArtifactBase {
  constructor (game) {
    super(game, "Steal Artifact", "Collectors’ Edition", "CED");
  }
}

module.exports = StealArtifact;
