"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MoggHollows extends Card {
  constructor(game) {
    super(game, "Mogg Hollows", "Battle Royale Box Set", "BRB");
  }
}

module.exports = MoggHollows;
