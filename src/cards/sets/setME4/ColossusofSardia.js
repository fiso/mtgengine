"use strict";
const Constants = require ("../../../Constants");
const ColossusofSardiaBase = require("../setATQ/ColossusofSardia");

class ColossusofSardia extends ColossusofSardiaBase {
  constructor (game) {
    super(game, "Colossus of Sardia", "Masters Edition IV", "ME4");
  }
}

module.exports = ColossusofSardia;
