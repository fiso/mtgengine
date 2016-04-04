"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AssemblyWorker extends UnimplementedCard {
  constructor(game) {
    super(game, "Assembly-Worker", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = AssemblyWorker;
