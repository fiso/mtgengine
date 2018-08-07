"use strict";
const Constants = require ("../../../Constants");
const StarlightBase = require("../set7ED/Starlight");

class Starlight extends StarlightBase {
  constructor (game) {
    super(game, "Starlight", "Portal", "POR");
  }
}

module.exports = Starlight;
