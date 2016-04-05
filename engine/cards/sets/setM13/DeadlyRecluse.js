"use strict";
const Constants = require ("../../../Constants");
const DeadlyRecluseBase = require("../setDDL/DeadlyRecluse");

class DeadlyRecluse extends DeadlyRecluseBase {
  constructor(game) {
    super(game, "Deadly Recluse", "Magic 2013", "M13");
  }
}

module.exports = DeadlyRecluse;
