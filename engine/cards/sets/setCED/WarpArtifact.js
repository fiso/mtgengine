"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WarpArtifact extends UnimplementedCard {
  constructor(game) {
    super(game, "Warp Artifact", "Collector's Edition", "CED");
  }
}

module.exports = WarpArtifact;
