"use strict";
const Constants = require ("../../../Constants");
const ColossusofSardiaBase = require("../setME4/ColossusofSardia");

class ColossusofSardia extends ColossusofSardiaBase {
  constructor (game) {
    super(game, "Colossus of Sardia", "Tenth Edition", "10E");
  }
}

module.exports = ColossusofSardia;
