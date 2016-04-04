"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LivingArtifact extends Card {
  constructor(game) {
    super(game, "Living Artifact", "Collector's Edition", "CED");
  }
}

module.exports = LivingArtifact;
