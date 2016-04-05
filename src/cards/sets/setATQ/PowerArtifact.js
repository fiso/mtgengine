"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PowerArtifact extends UnimplementedCard {
  constructor(game) {
    super(game, "Power Artifact", "Antiquities", "ATQ");
  }
}

module.exports = PowerArtifact;
