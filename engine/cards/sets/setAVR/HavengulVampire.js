"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HavengulVampire extends Card {
  constructor(game) {
    super(game, "Havengul Vampire", "Avacyn Restored", "AVR");
  }
}

module.exports = HavengulVampire;
