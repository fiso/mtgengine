"use strict";
const Constants = require ("../../../Constants");
const LinvalaKeeperofSilenceBase = require("../setMM3/LinvalaKeeperofSilence");

class LinvalaKeeperofSilence extends LinvalaKeeperofSilenceBase {
  constructor (game) {
    super(game, "Linvala, Keeper of Silence", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = LinvalaKeeperofSilence;
