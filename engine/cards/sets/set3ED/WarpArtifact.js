"use strict";
const Constants = require ("../../../Constants");
const WarpArtifactBase = require("../setCED/WarpArtifact");

class WarpArtifact extends WarpArtifactBase {
  constructor(game) {
    super(game, "Warp Artifact", "Revised Edition", "3ED");
  }
}

module.exports = WarpArtifact;
