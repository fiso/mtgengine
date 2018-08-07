"use strict";
const Constants = require ("../../../Constants");
const VanishintoMemoryBase = require("../setMM3/VanishintoMemory");

class VanishintoMemory extends VanishintoMemoryBase {
  constructor (game) {
    super(game, "Vanish into Memory", "Coldsnap", "CSP");
  }
}

module.exports = VanishintoMemory;
