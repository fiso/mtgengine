"use strict";
const Constants = require ("../../../Constants");
const SulfurousBlastBase = require("../setCMA/SulfurousBlast");

class SulfurousBlast extends SulfurousBlastBase {
  constructor (game) {
    super(game, "Sulfurous Blast", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = SulfurousBlast;
