"use strict";
const Constants = require ("../../../Constants");
const KeepWatchBase = require("../setHOP/KeepWatch");

class KeepWatch extends KeepWatchBase {
  constructor (game) {
    super(game, "Keep Watch", "Judgment", "JUD");
  }
}

module.exports = KeepWatch;
