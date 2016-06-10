"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TransmuteArtifact extends UnimplementedCard {
  constructor (game) {
    super(game, "Transmute Artifact", "Antiquities", "ATQ");
  }
}

module.exports = TransmuteArtifact;
