"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AssaultSuit extends Card {
  constructor(game) {
    super(game, "Assault Suit", "Commander 2014", "C14");
  }
}

module.exports = AssaultSuit;
