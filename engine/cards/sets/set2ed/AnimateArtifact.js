"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AnimateArtifactBase = require("../setCED/AnimateArtifact.js");

class AnimateArtifact extends AnimateArtifactBase {
  constructor(game) {
    super(game, "Animate Artifact", "Unlimited Edition", "2ED");
  }
}

module.exports = AnimateArtifact;
