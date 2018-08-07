"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TransmuteArtifact extends UnimplementedCard {
  constructor (game) {
    super(game, "Transmute Artifact", "Masters Edition IV", "ME4");
  }
}

module.exports = TransmuteArtifact;
