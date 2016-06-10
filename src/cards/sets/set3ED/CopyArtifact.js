"use strict";
const Constants = require ("../../../Constants");
const CopyArtifactBase = require("../setCED/CopyArtifact");

class CopyArtifact extends CopyArtifactBase {
  constructor (game) {
    super(game, "Copy Artifact", "Revised Edition", "3ED");
  }
}

module.exports = CopyArtifact;
