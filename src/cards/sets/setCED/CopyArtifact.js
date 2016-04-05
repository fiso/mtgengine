"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CopyArtifact extends UnimplementedCard {
  constructor(game) {
    super(game, "Copy Artifact", "Collector's Edition", "CED");
  }
}

module.exports = CopyArtifact;
