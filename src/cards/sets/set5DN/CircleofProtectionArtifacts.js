"use strict";
const Constants = require ("../../../Constants");
const CircleofProtectionArtifactsBase = require("../setATQ/CircleofProtectionArtifacts");

class CircleofProtectionArtifacts extends CircleofProtectionArtifactsBase {
  constructor (game) {
    super(game, "Circle of Protection: Artifacts", "Fifth Dawn", "5DN");
  }
}

module.exports = CircleofProtectionArtifacts;
