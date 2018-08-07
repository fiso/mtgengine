"use strict";
const Constants = require ("../../../Constants");
const CausticTarBase = require("../setA25/CausticTar");

class CausticTar extends CausticTarBase {
  constructor (game) {
    super(game, "Caustic Tar", "Magic 2015", "M15");
  }
}

module.exports = CausticTar;
