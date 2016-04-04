"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CurseArtifact extends Card {
  constructor(game) {
    super(game, "Curse Artifact", "The Dark", "DRK");
  }
}

module.exports = CurseArtifact;
