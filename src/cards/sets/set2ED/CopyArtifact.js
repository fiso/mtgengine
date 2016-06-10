"use strict";
const Constants = require ("../../../Constants");
const CopyArtifactBase = require("../setCED/CopyArtifact");

class CopyArtifact extends CopyArtifactBase {
  constructor (game) {
    super(game, "Copy Artifact", "Unlimited Edition", "2ED");
  }
}

module.exports = CopyArtifact;
