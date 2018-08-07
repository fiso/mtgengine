"use strict";
const Constants = require ("../../../Constants");
const AwakeningZoneBase = require("../setPCA/AwakeningZone");

class AwakeningZone extends AwakeningZoneBase {
  constructor (game) {
    super(game, "Awakening Zone", "Planechase 2012", "PC2");
  }
}

module.exports = AwakeningZone;
