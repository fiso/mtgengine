"use strict";
const Constants = require ("../../../Constants");
const FlyingCraneTechniqueBase = require("../setKTK/FlyingCraneTechnique");

class FlyingCraneTechnique extends FlyingCraneTechniqueBase {
  constructor (game) {
    super(game, "Flying Crane Technique", "Khans of Tarkir Promos", "PKTK");
  }
}

module.exports = FlyingCraneTechnique;
