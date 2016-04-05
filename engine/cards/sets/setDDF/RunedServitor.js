"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RunedServitor extends UnimplementedCard {
  constructor(game) {
    super(game, "Runed Servitor", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = RunedServitor;
