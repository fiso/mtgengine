"use strict";
const Constants = require ("../../../Constants");
const ArtifactBlastBase = require("../setATQ/ArtifactBlast");

class ArtifactBlast extends ArtifactBlastBase {
  constructor (game) {
    super(game, "Artifact Blast", "Masters Edition IV", "ME4");
  }
}

module.exports = ArtifactBlast;
