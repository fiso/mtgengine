"use strict";
const Constants = require ("../../../Constants");
const ViashinoSlaughtermasterBase = require("../setMM2/ViashinoSlaughtermaster");

class ViashinoSlaughtermaster extends ViashinoSlaughtermasterBase {
  constructor (game) {
    super(game, "Viashino Slaughtermaster", "Conflux", "CON");
  }
}

module.exports = ViashinoSlaughtermaster;
