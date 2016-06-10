"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LotusCobra extends UnimplementedCard {
  constructor (game) {
    super(game, "Lotus Cobra", "Grand Prix", "pGPX");
  }
}

module.exports = LotusCobra;
