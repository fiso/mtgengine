"use strict";
const Constants = require ("../../../Constants");
const ExtraplanarLensBase = require("../setMPS/ExtraplanarLens");

class ExtraplanarLens extends ExtraplanarLensBase {
  constructor (game) {
    super(game, "Extraplanar Lens", "Mirrodin", "MRD");
  }
}

module.exports = ExtraplanarLens;
