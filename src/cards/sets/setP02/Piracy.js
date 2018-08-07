"use strict";
const Constants = require ("../../../Constants");
const PiracyBase = require("../setS99/Piracy");

class Piracy extends PiracyBase {
  constructor (game) {
    super(game, "Piracy", "Portal Second Age", "P02");
  }
}

module.exports = Piracy;
