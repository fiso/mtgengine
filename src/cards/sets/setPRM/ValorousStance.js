"use strict";
const Constants = require ("../../../Constants");
const ValorousStanceBase = require("../setCP3/ValorousStance");

class ValorousStance extends ValorousStanceBase {
  constructor (game) {
    super(game, "Valorous Stance", "Magic Online Promos", "PRM");
  }
}

module.exports = ValorousStance;
