"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ArtifactMutation extends Card {
  constructor(game) {
    super(game, "Artifact Mutation", "Invasion", "INV");
  }
}

module.exports = ArtifactMutation;
