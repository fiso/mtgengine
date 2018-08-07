"use strict";
const Constants = require ("../../../Constants");
const SulfurousBlastBase = require("../setCMA/SulfurousBlast");

class SulfurousBlast extends SulfurousBlastBase {
  constructor (game) {
    super(game, "Sulfurous Blast", "Commander 2011", "CMD");
  }
}

module.exports = SulfurousBlast;
