"use strict";
const Constants = require ("../../../Constants");
const AnimateArtifactBase = require("../setCED/AnimateArtifact");

class AnimateArtifact extends AnimateArtifactBase {
  constructor (game) {
    super(game, "Animate Artifact", "Fourth Edition", "4ED");
  }
}

module.exports = AnimateArtifact;
