"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrimGuardian extends UnimplementedCard {
  constructor (game) {
    super(game, "Grim Guardian", "Journey into Nyx", "JOU");
  }
}

module.exports = GrimGuardian;
