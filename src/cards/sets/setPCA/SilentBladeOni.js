"use strict";
const Constants = require ("../../../Constants");
const SilentBladeOniBase = require("../setC18/SilentBladeOni");

class SilentBladeOni extends SilentBladeOniBase {
  constructor (game) {
    super(game, "Silent-Blade Oni", "Planechase Anthology", "PCA");
  }
}

module.exports = SilentBladeOni;
