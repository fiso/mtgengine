"use strict";
const Constants = require ("../../../Constants");
const CopyArtifactBase = require("../setCED/CopyArtifact");

class CopyArtifact extends CopyArtifactBase {
  constructor(game) {
    super(game, "Copy Artifact", "Masters Edition IV", "ME4");
  }
}

module.exports = CopyArtifact;
