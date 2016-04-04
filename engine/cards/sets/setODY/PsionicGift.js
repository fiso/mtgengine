"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PsionicGift extends Card {
  constructor(game) {
    super(game, "Psionic Gift", "Odyssey", "ODY");
  }
}

module.exports = PsionicGift;
