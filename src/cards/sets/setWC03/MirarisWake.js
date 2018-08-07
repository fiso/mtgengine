"use strict";
const Constants = require ("../../../Constants");
const MirarisWakeBase = require("../setC17/MirarisWake");

class MirarisWake extends MirarisWakeBase {
  constructor (game) {
    super(game, "Mirari's Wake", "World Championship Decks 2003", "WC03");
  }
}

module.exports = MirarisWake;
