"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WarpArtifact extends Card {
  constructor(game) {
    super(game, "Warp Artifact", "Collector's Edition", "CED");
  }
}

module.exports = WarpArtifact;
