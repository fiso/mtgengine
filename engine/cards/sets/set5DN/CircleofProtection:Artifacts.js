"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CircleofProtection:ArtifactsBase = require("../setATQ/CircleofProtection:Artifacts.js");

class CircleofProtection:Artifacts extends CircleofProtection:ArtifactsBase {
  constructor(game) {
    super(game, "Circle of Protection: Artifacts", "Fifth Dawn", "5DN");
  }
}

module.exports = CircleofProtection:Artifacts;
