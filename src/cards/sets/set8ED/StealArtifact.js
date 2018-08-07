"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StealArtifact extends UnimplementedCard {
  constructor (game) {
    super(game, "Steal Artifact", "Eighth Edition", "8ED");
  }
}

module.exports = StealArtifact;
