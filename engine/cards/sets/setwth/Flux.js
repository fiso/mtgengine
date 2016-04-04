"use strict";
const Constants = require ("../../../Constants");
const FluxBase = require("../setPOR/Flux");

class Flux extends FluxBase {
  constructor(game) {
    super(game, "Flux", "Weatherlight", "WTH");
  }
}

module.exports = Flux;
