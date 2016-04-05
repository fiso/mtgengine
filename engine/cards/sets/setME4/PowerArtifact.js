"use strict";
const Constants = require ("../../../Constants");
const PowerArtifactBase = require("../setATQ/PowerArtifact");

class PowerArtifact extends PowerArtifactBase {
  constructor(game) {
    super(game, "Power Artifact", "Masters Edition IV", "ME4");
  }
}

module.exports = PowerArtifact;
