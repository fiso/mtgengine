"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PowerArtifact extends Card {
  constructor(game) {
    super(game, "Power Artifact", "Antiquities", "ATQ");
  }
}

module.exports = PowerArtifact;
