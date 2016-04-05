"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArtifactMutation extends UnimplementedCard {
  constructor(game) {
    super(game, "Artifact Mutation", "Invasion", "INV");
  }
}

module.exports = ArtifactMutation;
