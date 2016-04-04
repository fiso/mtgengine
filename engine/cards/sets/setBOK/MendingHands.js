"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MendingHands extends Card {
  constructor(game) {
    super(game, "Mending Hands", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = MendingHands;
