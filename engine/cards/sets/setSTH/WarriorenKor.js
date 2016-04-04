"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WarriorenKor extends Card {
  constructor(game) {
    super(game, "Warrior en-Kor", "Stronghold", "STH");
  }
}

module.exports = WarriorenKor;
