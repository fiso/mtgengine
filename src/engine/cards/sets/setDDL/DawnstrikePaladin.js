"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DawnstrikePaladin extends UnimplementedCard {
  constructor (game) {
    super(game, "Dawnstrike Paladin", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = DawnstrikePaladin;
