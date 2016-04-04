"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ArtifactWard extends Card {
  constructor(game) {
    super(game, "Artifact Ward", "Antiquities", "ATQ");
  }
}

module.exports = ArtifactWard;
