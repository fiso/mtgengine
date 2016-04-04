"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SavageGorilla extends Card {
  constructor(game) {
    super(game, "Savage Gorilla", "Apocalypse", "APC");
  }
}

module.exports = SavageGorilla;
