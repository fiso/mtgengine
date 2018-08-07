"use strict";
const Constants = require ("../../../Constants");
const LivingArtifactBase = require("../set5ED/LivingArtifact");

class LivingArtifact extends LivingArtifactBase {
  constructor (game) {
    super(game, "Living Artifact", "Limited Edition Beta", "LEB");
  }
}

module.exports = LivingArtifact;
