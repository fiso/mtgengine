"use strict";
const Constants = require ("../../../Constants");
const FlareBase = require("../set5ED/Flare");

class Flare extends FlareBase {
  constructor (game) {
    super(game, "Flare", "Mirage", "MIR");
  }
}

module.exports = Flare;
