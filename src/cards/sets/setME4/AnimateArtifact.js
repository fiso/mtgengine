"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AnimateArtifact extends UnimplementedCard {
  constructor (game) {
    super(game, "Animate Artifact", "Masters Edition IV", "ME4");
  }
}

module.exports = AnimateArtifact;
