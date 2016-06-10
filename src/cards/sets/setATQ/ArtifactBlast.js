"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArtifactBlast extends UnimplementedCard {
  constructor (game) {
    super(game, "Artifact Blast", "Antiquities", "ATQ");
  }
}

module.exports = ArtifactBlast;
