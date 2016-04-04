"use strict";
const Constants = require ("../../../Constants");
const CausticTarBase = require("../setM15/CausticTar");

class CausticTar extends CausticTarBase {
  constructor(game) {
    super(game, "Caustic Tar", "Odyssey", "ODY");
  }
}

module.exports = CausticTar;
