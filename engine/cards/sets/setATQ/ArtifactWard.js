"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArtifactWard extends UnimplementedCard {
  constructor(game) {
    super(game, "Artifact Ward", "Antiquities", "ATQ");
  }
}

module.exports = ArtifactWard;
