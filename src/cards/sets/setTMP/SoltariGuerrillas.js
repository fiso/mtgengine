"use strict";
const Constants = require ("../../../Constants");
const SoltariGuerrillasBase = require("../setTPR/SoltariGuerrillas");

class SoltariGuerrillas extends SoltariGuerrillasBase {
  constructor (game) {
    super(game, "Soltari Guerrillas", "Tempest", "TMP");
  }
}

module.exports = SoltariGuerrillas;
