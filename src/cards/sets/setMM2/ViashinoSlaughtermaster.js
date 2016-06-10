"use strict";
const Constants = require ("../../../Constants");
const ViashinoSlaughtermasterBase = require("../setCON/ViashinoSlaughtermaster");

class ViashinoSlaughtermaster extends ViashinoSlaughtermasterBase {
  constructor (game) {
    super(game, "Viashino Slaughtermaster", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = ViashinoSlaughtermaster;
