"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TransmuteArtifactBase = require("../setATQ/TransmuteArtifact.js");

class TransmuteArtifact extends TransmuteArtifactBase {
  constructor(game) {
    super(game, "Transmute Artifact", "Masters Edition IV", "ME4");
  }
}

module.exports = TransmuteArtifact;
