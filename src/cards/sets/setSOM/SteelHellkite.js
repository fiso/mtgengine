"use strict";
const Constants = require ("../../../Constants");
const SteelHellkiteBase = require("../setC14/SteelHellkite");

class SteelHellkite extends SteelHellkiteBase {
  constructor(game) {
    super(game, "Steel Hellkite", "Scars of Mirrodin", "SOM");
  }
}

module.exports = SteelHellkite;
