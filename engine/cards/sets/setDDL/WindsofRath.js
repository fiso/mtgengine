"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WindsofRath extends UnimplementedCard {
  constructor(game) {
    super(game, "Winds of Rath", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = WindsofRath;
