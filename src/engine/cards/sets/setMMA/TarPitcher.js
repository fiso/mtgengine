"use strict";
const Constants = require ("../../../Constants");
const TarPitcherBase = require("../setEVG/TarPitcher");

class TarPitcher extends TarPitcherBase {
  constructor (game) {
    super(game, "Tar Pitcher", "Modern Masters", "MMA");
  }
}

module.exports = TarPitcher;
