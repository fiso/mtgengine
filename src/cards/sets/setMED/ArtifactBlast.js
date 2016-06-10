"use strict";
const Constants = require ("../../../Constants");
const ArtifactBlastBase = require("../setATQ/ArtifactBlast");

class ArtifactBlast extends ArtifactBlastBase {
  constructor (game) {
    super(game, "Artifact Blast", "Masters Edition", "MED");
  }
}

module.exports = ArtifactBlast;
