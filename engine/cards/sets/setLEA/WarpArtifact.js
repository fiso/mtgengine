"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WarpArtifactBase = require("../setCED/WarpArtifact.js");

class WarpArtifact extends WarpArtifactBase {
  constructor(game) {
    super(game, "Warp Artifact", "Limited Edition Alpha", "LEA");
  }
}

module.exports = WarpArtifact;
