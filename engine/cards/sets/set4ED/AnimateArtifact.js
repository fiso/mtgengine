"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AnimateArtifactBase = require("../setCED/AnimateArtifact.js");

class AnimateArtifact extends AnimateArtifactBase {
  constructor(game) {
    super(game, "Animate Artifact", "Fourth Edition", "4ED");
  }
}

module.exports = AnimateArtifact;
