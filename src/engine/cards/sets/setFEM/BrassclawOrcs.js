"use strict";
const Constants = require ("../../../Constants");
const BrassclawOrcsBase = require("../setME2/BrassclawOrcs");

class BrassclawOrcs extends BrassclawOrcsBase {
  constructor (game) {
    super(game, "Brassclaw Orcs", "Fallen Empires", "FEM");
  }
}

module.exports = BrassclawOrcs;
