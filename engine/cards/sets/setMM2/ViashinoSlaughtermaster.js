"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ViashinoSlaughtermasterBase = require("../setCON/ViashinoSlaughtermaster.js");

class ViashinoSlaughtermaster extends ViashinoSlaughtermasterBase {
  constructor(game) {
    super(game, "Viashino Slaughtermaster", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = ViashinoSlaughtermaster;
