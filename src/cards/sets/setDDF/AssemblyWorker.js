"use strict";
const Constants = require ("../../../Constants");
const AssemblyWorkerBase = require("../setA25/AssemblyWorker");

class AssemblyWorker extends AssemblyWorkerBase {
  constructor (game) {
    super(game, "Assembly-Worker", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = AssemblyWorker;
