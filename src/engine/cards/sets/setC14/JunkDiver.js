"use strict";
const Constants = require ("../../../Constants");
const JunkDiverBase = require("../setCM2/JunkDiver");

class JunkDiver extends JunkDiverBase {
  constructor (game) {
    super(game, "Junk Diver", "Commander 2014", "C14");
  }
}

module.exports = JunkDiver;
