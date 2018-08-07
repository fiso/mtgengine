"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CurseArtifact extends UnimplementedCard {
  constructor (game) {
    super(game, "Curse Artifact", "The Dark", "DRK");
  }
}

module.exports = CurseArtifact;
