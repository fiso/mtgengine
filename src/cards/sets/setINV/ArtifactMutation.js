"use strict";
const Constants = require ("../../../Constants");
const ArtifactMutationBase = require("../setC16/ArtifactMutation");

class ArtifactMutation extends ArtifactMutationBase {
  constructor (game) {
    super(game, "Artifact Mutation", "Invasion", "INV");
  }
}

module.exports = ArtifactMutation;
