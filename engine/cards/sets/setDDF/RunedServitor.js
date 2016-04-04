"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RunedServitor extends Card {
  constructor(game) {
    super(game, "Runed Servitor", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = RunedServitor;
