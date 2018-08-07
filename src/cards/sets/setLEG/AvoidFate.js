"use strict";
const Constants = require ("../../../Constants");
const AvoidFateBase = require("../setTSB/AvoidFate");

class AvoidFate extends AvoidFateBase {
  constructor (game) {
    super(game, "Avoid Fate", "Legends", "LEG");
  }
}

module.exports = AvoidFate;
