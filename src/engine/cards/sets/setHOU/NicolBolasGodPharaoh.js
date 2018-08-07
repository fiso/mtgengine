"use strict";
const Constants = require ("../../../Constants");
const NicolBolasGodPharaohBase = require("../setPS17/NicolBolasGodPharaoh");

class NicolBolasGodPharaoh extends NicolBolasGodPharaohBase {
  constructor (game) {
    super(game, "Nicol Bolas, God-Pharaoh", "Hour of Devastation", "HOU");
  }
}

module.exports = NicolBolasGodPharaoh;
