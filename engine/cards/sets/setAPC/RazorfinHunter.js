"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RazorfinHunter extends Card {
  constructor(game) {
    super(game, "Razorfin Hunter", "Apocalypse", "APC");
  }
}

module.exports = RazorfinHunter;
