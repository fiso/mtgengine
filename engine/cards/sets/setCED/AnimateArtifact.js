"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AnimateArtifact extends UnimplementedCard {
  constructor(game) {
    super(game, "Animate Artifact", "Collector's Edition", "CED");
  }
}

module.exports = AnimateArtifact;
