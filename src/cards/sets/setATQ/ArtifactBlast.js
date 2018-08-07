"use strict";
const Constants = require ("../../../Constants");
const ArtifactBlastBase = require("../setME4/ArtifactBlast");

class ArtifactBlast extends ArtifactBlastBase {
  constructor (game) {
    super(game, "Artifact Blast", "Antiquities", "ATQ");
  }
}

module.exports = ArtifactBlast;
