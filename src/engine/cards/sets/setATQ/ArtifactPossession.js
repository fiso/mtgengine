"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArtifactPossession extends UnimplementedCard {
  constructor (game) {
    super(game, "Artifact Possession", "Antiquities", "ATQ");
  }
}

module.exports = ArtifactPossession;
