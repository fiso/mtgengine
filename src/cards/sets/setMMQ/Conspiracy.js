"use strict";
const Constants = require ("../../../Constants");
const ConspiracyBase = require("../setTSB/Conspiracy");

class Conspiracy extends ConspiracyBase {
  constructor (game) {
    super(game, "Conspiracy", "Mercadian Masques", "MMQ");
  }
}

module.exports = Conspiracy;
