"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FlyingCraneTechniqueBase = require("../setKTK/FlyingCraneTechnique.js");

class FlyingCraneTechnique extends FlyingCraneTechniqueBase {
  constructor(game) {
    super(game, "Flying Crane Technique", "Prerelease Events", "pPRE");
  }
}

module.exports = FlyingCraneTechnique;
