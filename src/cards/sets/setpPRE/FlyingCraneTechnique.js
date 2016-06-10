"use strict";
const Constants = require ("../../../Constants");
const FlyingCraneTechniqueBase = require("../setKTK/FlyingCraneTechnique");

class FlyingCraneTechnique extends FlyingCraneTechniqueBase {
  constructor (game) {
    super(game, "Flying Crane Technique", "Prerelease Events", "pPRE");
  }
}

module.exports = FlyingCraneTechnique;
