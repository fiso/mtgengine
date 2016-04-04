"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PsychicTransfer extends Card {
  constructor(game) {
    super(game, "Psychic Transfer", "Classic Sixth Edition", "6ED");
  }
}

module.exports = PsychicTransfer;
