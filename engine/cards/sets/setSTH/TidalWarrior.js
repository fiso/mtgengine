"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TidalWarrior extends Card {
  constructor(game) {
    super(game, "Tidal Warrior", "Stronghold", "STH");
  }
}

module.exports = TidalWarrior;
