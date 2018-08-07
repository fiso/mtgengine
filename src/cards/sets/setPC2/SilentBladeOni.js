"use strict";
const Constants = require ("../../../Constants");
const SilentBladeOniBase = require("../setC18/SilentBladeOni");

class SilentBladeOni extends SilentBladeOniBase {
  constructor (game) {
    super(game, "Silent-Blade Oni", "Planechase 2012", "PC2");
  }
}

module.exports = SilentBladeOni;
