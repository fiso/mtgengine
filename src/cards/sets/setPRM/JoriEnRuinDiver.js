"use strict";
const Constants = require ("../../../Constants");
const JoriEnRuinDiverBase = require("../setDDS/JoriEnRuinDiver");

class JoriEnRuinDiver extends JoriEnRuinDiverBase {
  constructor (game) {
    super(game, "Jori En, Ruin Diver", "Magic Online Promos", "PRM");
  }
}

module.exports = JoriEnRuinDiver;
