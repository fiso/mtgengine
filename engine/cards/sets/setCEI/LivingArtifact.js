"use strict";
const Constants = require ("../../../Constants");
const LivingArtifactBase = require("../setCED/LivingArtifact");

class LivingArtifact extends LivingArtifactBase {
  constructor(game) {
    super(game, "Living Artifact", "International Collector's Edition", "CEI");
  }
}

module.exports = LivingArtifact;
