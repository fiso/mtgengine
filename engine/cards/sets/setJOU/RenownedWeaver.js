"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RenownedWeaver extends Card {
  constructor(game) {
    super(game, "Renowned Weaver", "Journey into Nyx", "JOU");
  }
}

module.exports = RenownedWeaver;
