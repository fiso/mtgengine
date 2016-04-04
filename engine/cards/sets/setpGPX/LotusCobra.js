"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LotusCobra extends Card {
  constructor(game) {
    super(game, "Lotus Cobra", "Grand Prix", "pGPX");
  }
}

module.exports = LotusCobra;
