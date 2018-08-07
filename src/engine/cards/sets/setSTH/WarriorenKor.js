"use strict";
const Constants = require ("../../../Constants");
const WarriorenKorBase = require("../setTPR/WarriorenKor");

class WarriorenKor extends WarriorenKorBase {
  constructor (game) {
    super(game, "Warrior en-Kor", "Stronghold", "STH");
  }
}

module.exports = WarriorenKor;
