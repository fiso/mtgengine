"use strict";
const Constants = require ("../../../Constants");
const PowerArtifactBase = require("../setME4/PowerArtifact");

class PowerArtifact extends PowerArtifactBase {
  constructor (game) {
    super(game, "Power Artifact", "Antiquities", "ATQ");
  }
}

module.exports = PowerArtifact;
