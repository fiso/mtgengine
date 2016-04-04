"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MinionofLeshrac extends Card {
  constructor(game) {
    super(game, "Minion of Leshrac", "Ice Age", "ICE");
  }
}

module.exports = MinionofLeshrac;
