"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EnsoulArtifact extends UnimplementedCard {
  constructor(game) {
    super(game, "Ensoul Artifact", "Magic 2015 Core Set", "M15");
  }
}

module.exports = EnsoulArtifact;
