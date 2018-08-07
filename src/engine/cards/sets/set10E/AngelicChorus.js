"use strict";
const Constants = require ("../../../Constants");
const AngelicChorusBase = require("../setBBD/AngelicChorus");

class AngelicChorus extends AngelicChorusBase {
  constructor (game) {
    super(game, "Angelic Chorus", "Tenth Edition", "10E");
  }
}

module.exports = AngelicChorus;
