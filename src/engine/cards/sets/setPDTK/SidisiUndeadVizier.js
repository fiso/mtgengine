"use strict";
const Constants = require ("../../../Constants");
const SidisiUndeadVizierBase = require("../setDTK/SidisiUndeadVizier");

class SidisiUndeadVizier extends SidisiUndeadVizierBase {
  constructor (game) {
    super(game, "Sidisi, Undead Vizier", "Dragons of Tarkir Promos", "PDTK");
  }
}

module.exports = SidisiUndeadVizier;
