"use strict";
const Constants = require ("../../../Constants");
const CopyArtifactBase = require("../setME4/CopyArtifact");

class CopyArtifact extends CopyArtifactBase {
  constructor (game) {
    super(game, "Copy Artifact", "Magic Online Promos", "PRM");
  }
}

module.exports = CopyArtifact;
