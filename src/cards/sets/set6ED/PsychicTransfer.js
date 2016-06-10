"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PsychicTransfer extends UnimplementedCard {
  constructor (game) {
    super(game, "Psychic Transfer", "Classic Sixth Edition", "6ED");
  }
}

module.exports = PsychicTransfer;
