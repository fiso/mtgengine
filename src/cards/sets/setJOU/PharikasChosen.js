"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PharikasChosen extends UnimplementedCard {
  constructor(game) {
    super(game, "Pharika's Chosen", "Journey into Nyx", "JOU");
  }
}

module.exports = PharikasChosen;
