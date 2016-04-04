"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FluxBase = require("../setPOR/Flux.js");

class Flux extends FluxBase {
  constructor(game) {
    super(game, "Flux", "Weatherlight", "WTH");
  }
}

module.exports = Flux;
