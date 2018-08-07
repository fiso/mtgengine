"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PsychicTransfer extends UnimplementedCard {
  constructor (game) {
    super(game, "Psychic Transfer", "Starter 1999", "S99");
  }
}

module.exports = PsychicTransfer;
