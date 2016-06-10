"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WarriorenKor extends UnimplementedCard {
  constructor (game) {
    super(game, "Warrior en-Kor", "Stronghold", "STH");
  }
}

module.exports = WarriorenKor;
