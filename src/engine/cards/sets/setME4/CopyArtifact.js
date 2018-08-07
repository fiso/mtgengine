"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CopyArtifact extends UnimplementedCard {
  constructor (game) {
    super(game, "Copy Artifact", "Masters Edition IV", "ME4");
  }
}

module.exports = CopyArtifact;
