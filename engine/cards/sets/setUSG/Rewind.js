"use strict";
const Constants = require ("../../../Constants");
const RewindBase = require("../setpARL/Rewind");

class Rewind extends RewindBase {
  constructor(game) {
    super(game, "Rewind", "Urza's Saga", "USG");
  }
}

module.exports = Rewind;
