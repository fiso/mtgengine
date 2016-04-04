"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SaltfieldRecluseBase = require("../setMMA/SaltfieldRecluse.js");

class SaltfieldRecluse extends SaltfieldRecluseBase {
  constructor(game) {
    super(game, "Saltfield Recluse", "Planar Chaos", "PLC");
  }
}

module.exports = SaltfieldRecluse;
