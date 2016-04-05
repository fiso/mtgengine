"use strict";
const Constants = require ("../../../Constants");
const TorWaukiBase = require("../setCHR/TorWauki");

class TorWauki extends TorWaukiBase {
  constructor(game) {
    super(game, "Tor Wauki", "Legends", "LEG");
  }
}

module.exports = TorWauki;
