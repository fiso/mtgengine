"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LivingArtifact extends UnimplementedCard {
  constructor (game) {
    super(game, "Living Artifact", "Fifth Edition", "5ED");
  }
}

module.exports = LivingArtifact;
