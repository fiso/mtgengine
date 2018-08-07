"use strict";
const Constants = require ("../../../Constants");
const WarpArtifactBase = require("../setME4/WarpArtifact");

class WarpArtifact extends WarpArtifactBase {
  constructor (game) {
    super(game, "Warp Artifact", "Summer Magic / Edgar", "SUM");
  }
}

module.exports = WarpArtifact;
