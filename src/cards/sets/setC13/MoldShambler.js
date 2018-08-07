"use strict";
const Constants = require ("../../../Constants");
const MoldShamblerBase = require("../setDDM/MoldShambler");

class MoldShambler extends MoldShamblerBase {
  constructor (game) {
    super(game, "Mold Shambler", "Commander 2013", "C13");
  }
}

module.exports = MoldShambler;
