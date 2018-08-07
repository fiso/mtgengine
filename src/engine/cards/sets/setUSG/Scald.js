"use strict";
const Constants = require ("../../../Constants");
const ScaldBase = require("../setWC99/Scald");

class Scald extends ScaldBase {
  constructor (game) {
    super(game, "Scald", "Urza's Saga", "USG");
  }
}

module.exports = Scald;
