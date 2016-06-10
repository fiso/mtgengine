"use strict";
const Constants = require ("../../../Constants");
const AngelicChorusBase = require("../set10E/AngelicChorus");

class AngelicChorus extends AngelicChorusBase {
  constructor (game) {
    super(game, "Angelic Chorus", "Urza's Saga", "USG");
  }
}

module.exports = AngelicChorus;
