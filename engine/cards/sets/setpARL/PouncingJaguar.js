"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PouncingJaguar extends Card {
  constructor(game) {
    super(game, "Pouncing Jaguar", "Arena League", "pARL");
  }
}

module.exports = PouncingJaguar;
