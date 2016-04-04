"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CopyArtifactBase = require("../setCED/CopyArtifact.js");

class CopyArtifact extends CopyArtifactBase {
  constructor(game) {
    super(game, "Copy Artifact", "Revised Edition", "3ED");
  }
}

module.exports = CopyArtifact;
