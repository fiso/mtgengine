"use strict";
const Constants = require ("../../../Constants");
const JoriEnRuinDiverBase = require("../setDDS/JoriEnRuinDiver");

class JoriEnRuinDiver extends JoriEnRuinDiverBase {
  constructor (game) {
    super(game, "Jori En, Ruin Diver", "Oath of the Gatewatch Promos", "POGW");
  }
}

module.exports = JoriEnRuinDiver;
