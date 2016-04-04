"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ArtifactBlastBase = require("../setATQ/ArtifactBlast.js");

class ArtifactBlast extends ArtifactBlastBase {
  constructor(game) {
    super(game, "Artifact Blast", "Masters Edition", "MED");
  }
}

module.exports = ArtifactBlast;
