"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArtifactMutation extends UnimplementedCard {
  constructor (game) {
    super(game, "Artifact Mutation", "Commander 2016", "C16");
  }
}

module.exports = ArtifactMutation;
