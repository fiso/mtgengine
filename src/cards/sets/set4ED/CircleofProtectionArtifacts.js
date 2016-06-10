"use strict";
const Constants = require ("../../../Constants");
const CircleofProtectionArtifactsBase = require("../setATQ/CircleofProtectionArtifacts");

class CircleofProtectionArtifacts extends CircleofProtectionArtifactsBase {
  constructor (game) {
    super(game, "Circle of Protection: Artifacts", "Fourth Edition", "4ED");
  }
}

module.exports = CircleofProtectionArtifacts;
