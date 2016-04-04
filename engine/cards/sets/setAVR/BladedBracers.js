"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BladedBracers extends Card {
  constructor(game) {
    super(game, "Bladed Bracers", "Avacyn Restored", "AVR");
  }
}

module.exports = BladedBracers;
