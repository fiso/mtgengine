"use strict";
const Constants = require ("../../../Constants");
const AwakeningZoneBase = require("../setPCA/AwakeningZone");

class AwakeningZone extends AwakeningZoneBase {
  constructor (game) {
    super(game, "Awakening Zone", "Commander 2011", "CMD");
  }
}

module.exports = AwakeningZone;
