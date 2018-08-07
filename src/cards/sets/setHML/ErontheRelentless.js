"use strict";
const Constants = require ("../../../Constants");
const ErontheRelentlessBase = require("../setTSB/ErontheRelentless");

class ErontheRelentless extends ErontheRelentlessBase {
  constructor (game) {
    super(game, "Eron the Relentless", "Homelands", "HML");
  }
}

module.exports = ErontheRelentless;
