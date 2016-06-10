"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TidalWarrior extends UnimplementedCard {
  constructor (game) {
    super(game, "Tidal Warrior", "Stronghold", "STH");
  }
}

module.exports = TidalWarrior;
