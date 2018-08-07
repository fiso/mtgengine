"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArtifactBlast extends UnimplementedCard {
  constructor (game) {
    super(game, "Artifact Blast", "Masters Edition IV", "ME4");
  }
}

module.exports = ArtifactBlast;
