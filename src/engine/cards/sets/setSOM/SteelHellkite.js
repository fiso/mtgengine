"use strict";
const Constants = require ("../../../Constants");
const SteelHellkiteBase = require("../setC18/SteelHellkite");

class SteelHellkite extends SteelHellkiteBase {
  constructor (game) {
    super(game, "Steel Hellkite", "Scars of Mirrodin", "SOM");
  }
}

module.exports = SteelHellkite;
