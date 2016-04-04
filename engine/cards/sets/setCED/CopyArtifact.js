"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CopyArtifact extends Card {
  constructor(game) {
    super(game, "Copy Artifact", "Collector's Edition", "CED");
  }
}

module.exports = CopyArtifact;
