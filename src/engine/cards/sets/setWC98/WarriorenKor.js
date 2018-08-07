"use strict";
const Constants = require ("../../../Constants");
const WarriorenKorBase = require("../setTPR/WarriorenKor");

class WarriorenKor extends WarriorenKorBase {
  constructor (game) {
    super(game, "Warrior en-Kor", "World Championship Decks 1998", "WC98");
  }
}

module.exports = WarriorenKor;
