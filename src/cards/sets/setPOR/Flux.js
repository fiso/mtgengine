"use strict";
const Constants = require ("../../../Constants");
const FluxBase = require("../setWTH/Flux");

class Flux extends FluxBase {
  constructor (game) {
    super(game, "Flux", "Portal", "POR");
  }
}

module.exports = Flux;
