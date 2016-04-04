"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CopyArtifactBase = require("../setCED/CopyArtifact.js");

class CopyArtifact extends CopyArtifactBase {
  constructor(game) {
    super(game, "Copy Artifact", "Masters Edition IV", "ME4");
  }
}

module.exports = CopyArtifact;
