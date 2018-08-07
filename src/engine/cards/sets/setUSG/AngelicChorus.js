"use strict";
const Constants = require ("../../../Constants");
const AngelicChorusBase = require("../setBBD/AngelicChorus");

class AngelicChorus extends AngelicChorusBase {
  constructor (game) {
    super(game, "Angelic Chorus", "Urza's Saga", "USG");
  }
}

module.exports = AngelicChorus;
