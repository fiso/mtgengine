"use strict";
const Constants = require ("../../../Constants");
const BrassclawOrcsBase = require("../setFEM/BrassclawOrcs");

class BrassclawOrcs extends BrassclawOrcsBase {
  constructor(game) {
    super(game, "Brassclaw Orcs", "Fifth Edition", "5ED");
  }
}

module.exports = BrassclawOrcs;
