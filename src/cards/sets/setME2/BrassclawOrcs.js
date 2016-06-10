"use strict";
const Constants = require ("../../../Constants");
const BrassclawOrcsBase = require("../setFEM/BrassclawOrcs");

class BrassclawOrcs extends BrassclawOrcsBase {
  constructor (game) {
    super(game, "Brassclaw Orcs", "Masters Edition II", "ME2");
  }
}

module.exports = BrassclawOrcs;
