"use strict";
const Constants = require ("../../../Constants");
const AwakeningZoneBase = require("../setCMD/AwakeningZone");

class AwakeningZone extends AwakeningZoneBase {
  constructor (game) {
    super(game, "Awakening Zone", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = AwakeningZone;
