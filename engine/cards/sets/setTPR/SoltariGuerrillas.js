"use strict";
const Constants = require ("../../../Constants");
const SoltariGuerrillasBase = require("../setTMP/SoltariGuerrillas");

class SoltariGuerrillas extends SoltariGuerrillasBase {
  constructor(game) {
    super(game, "Soltari Guerrillas", "Tempest Remastered", "TPR");
  }
}

module.exports = SoltariGuerrillas;
