"use strict";
const Constants = require ("../../../Constants");
const AnimateArtifactBase = require("../setCED/AnimateArtifact");

class AnimateArtifact extends AnimateArtifactBase {
  constructor(game) {
    super(game, "Animate Artifact", "Masters Edition IV", "ME4");
  }
}

module.exports = AnimateArtifact;
