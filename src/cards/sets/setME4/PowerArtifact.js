"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PowerArtifact extends UnimplementedCard {
  constructor (game) {
    super(game, "Power Artifact", "Masters Edition IV", "ME4");
  }
}

module.exports = PowerArtifact;
