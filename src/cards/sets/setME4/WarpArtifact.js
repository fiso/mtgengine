"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WarpArtifact extends UnimplementedCard {
  constructor (game) {
    super(game, "Warp Artifact", "Masters Edition IV", "ME4");
  }
}

module.exports = WarpArtifact;
