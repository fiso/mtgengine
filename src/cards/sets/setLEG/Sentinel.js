"use strict";
const Constants = require ("../../../Constants");
const SentinelBase = require("../setCHR/Sentinel");

class Sentinel extends SentinelBase {
  constructor (game) {
    super(game, "Sentinel", "Legends", "LEG");
  }
}

module.exports = Sentinel;
