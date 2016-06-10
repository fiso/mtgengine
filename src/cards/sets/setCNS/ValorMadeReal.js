"use strict";
const Constants = require ("../../../Constants");
const ValorMadeRealBase = require("../setDIS/ValorMadeReal");

class ValorMadeReal extends ValorMadeRealBase {
  constructor (game) {
    super(game, "Valor Made Real", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = ValorMadeReal;
