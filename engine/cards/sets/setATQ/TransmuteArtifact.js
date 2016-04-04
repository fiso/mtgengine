"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TransmuteArtifact extends Card {
  constructor(game) {
    super(game, "Transmute Artifact", "Antiquities", "ATQ");
  }
}

module.exports = TransmuteArtifact;
