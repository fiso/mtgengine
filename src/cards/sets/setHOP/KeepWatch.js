"use strict";
const Constants = require ("../../../Constants");
const KeepWatchBase = require("../setJUD/KeepWatch");

class KeepWatch extends KeepWatchBase {
  constructor (game) {
    super(game, "Keep Watch", "Planechase", "HOP");
  }
}

module.exports = KeepWatch;
