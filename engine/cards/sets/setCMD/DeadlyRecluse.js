"use strict";
const Constants = require ("../../../Constants");
const DeadlyRecluseBase = require("../setDDL/DeadlyRecluse");

class DeadlyRecluse extends DeadlyRecluseBase {
  constructor(game) {
    super(game, "Deadly Recluse", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = DeadlyRecluse;
