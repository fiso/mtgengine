"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GrimGuardian extends Card {
  constructor(game) {
    super(game, "Grim Guardian", "Journey into Nyx", "JOU");
  }
}

module.exports = GrimGuardian;
