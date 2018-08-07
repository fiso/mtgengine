"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SavageGorilla extends UnimplementedCard {
  constructor (game) {
    super(game, "Savage Gorilla", "Apocalypse", "APC");
  }
}

module.exports = SavageGorilla;
