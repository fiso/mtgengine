"use strict";
const Constants = require ("../../../Constants");
const DeadlyRecluseBase = require("../setDDL/DeadlyRecluse");

class DeadlyRecluse extends DeadlyRecluseBase {
  constructor (game) {
    super(game, "Deadly Recluse", "Magic 2014 Core Set", "M14");
  }
}

module.exports = DeadlyRecluse;
