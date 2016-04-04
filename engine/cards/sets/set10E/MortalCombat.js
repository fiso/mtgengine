"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MortalCombat extends Card {
  constructor(game) {
    super(game, "Mortal Combat", "Tenth Edition", "10E");
  }
}

module.exports = MortalCombat;
