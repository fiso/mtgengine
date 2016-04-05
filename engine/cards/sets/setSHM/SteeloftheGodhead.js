"use strict";
const Constants = require ("../../../Constants");
const SteeloftheGodheadBase = require("../setDDI/SteeloftheGodhead");

class SteeloftheGodhead extends SteeloftheGodheadBase {
  constructor(game) {
    super(game, "Steel of the Godhead", "Shadowmoor", "SHM");
  }
}

module.exports = SteeloftheGodhead;
