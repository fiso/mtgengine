"use strict";
const Constants = require ("../../../Constants");
const AnimateArtifactBase = require("../setME4/AnimateArtifact");

class AnimateArtifact extends AnimateArtifactBase {
  constructor (game) {
    super(game, "Animate Artifact", "Limited Edition Alpha", "LEA");
  }
}

module.exports = AnimateArtifact;
