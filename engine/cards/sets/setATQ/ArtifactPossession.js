"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ArtifactPossession extends Card {
  constructor(game) {
    super(game, "Artifact Possession", "Antiquities", "ATQ");
  }
}

module.exports = ArtifactPossession;
