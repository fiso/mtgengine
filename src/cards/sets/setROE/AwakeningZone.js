"use strict";
const Constants = require ("../../../Constants");
const AwakeningZoneBase = require("../setCMD/AwakeningZone");

class AwakeningZone extends AwakeningZoneBase {
  constructor (game) {
    super(game, "Awakening Zone", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = AwakeningZone;
