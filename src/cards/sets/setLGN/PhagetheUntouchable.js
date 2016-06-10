"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhagetheUntouchable extends UnimplementedCard {
  constructor (game) {
    super(game, "Phage the Untouchable", "Legions", "LGN");
  }
}

module.exports = PhagetheUntouchable;
