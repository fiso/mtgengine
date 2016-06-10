"use strict";
const Constants = require ("../../../Constants");
const WarpArtifactBase = require("../setCED/WarpArtifact");

class WarpArtifact extends WarpArtifactBase {
  constructor (game) {
    super(game, "Warp Artifact", "Unlimited Edition", "2ED");
  }
}

module.exports = WarpArtifact;
