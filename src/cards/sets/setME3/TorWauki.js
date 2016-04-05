"use strict";
const Constants = require ("../../../Constants");
const TorWaukiBase = require("../setCHR/TorWauki");

class TorWauki extends TorWaukiBase {
  constructor(game) {
    super(game, "Tor Wauki", "Masters Edition III", "ME3");
  }
}

module.exports = TorWauki;
