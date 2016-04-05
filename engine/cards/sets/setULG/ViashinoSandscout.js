"use strict";
const Constants = require ("../../../Constants");
const ViashinoSandscoutBase = require("../set10E/ViashinoSandscout");

class ViashinoSandscout extends ViashinoSandscoutBase {
  constructor(game) {
    super(game, "Viashino Sandscout", "Urza's Legacy", "ULG");
  }
}

module.exports = ViashinoSandscout;
