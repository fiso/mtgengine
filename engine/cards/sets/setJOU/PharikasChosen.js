"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PharikasChosen extends Card {
  constructor(game) {
    super(game, "Pharika's Chosen", "Journey into Nyx", "JOU");
  }
}

module.exports = PharikasChosen;
