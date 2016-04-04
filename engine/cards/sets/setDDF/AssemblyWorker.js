"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AssemblyWorker extends Card {
  constructor(game) {
    super(game, "Assembly-Worker", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = AssemblyWorker;
