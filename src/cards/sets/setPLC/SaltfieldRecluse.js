"use strict";
const Constants = require ("../../../Constants");
const SaltfieldRecluseBase = require("../setMMA/SaltfieldRecluse");

class SaltfieldRecluse extends SaltfieldRecluseBase {
  constructor(game) {
    super(game, "Saltfield Recluse", "Planar Chaos", "PLC");
  }
}

module.exports = SaltfieldRecluse;
