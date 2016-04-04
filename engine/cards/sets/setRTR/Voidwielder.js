"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Voidwielder extends Card {
  constructor(game) {
    super(game, "Voidwielder", "Return to Ravnica", "RTR");
  }
}

module.exports = Voidwielder;
