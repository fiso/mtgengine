"use strict";
const Constants = require ("../../../Constants");
const JunkDiverBase = require("../setCM2/JunkDiver");

class JunkDiver extends JunkDiverBase {
  constructor (game) {
    super(game, "Junk Diver", "Urza's Destiny", "UDS");
  }
}

module.exports = JunkDiver;
