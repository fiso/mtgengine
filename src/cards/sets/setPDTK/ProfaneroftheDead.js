"use strict";
const Constants = require ("../../../Constants");
const ProfaneroftheDeadBase = require("../setDTK/ProfaneroftheDead");

class ProfaneroftheDead extends ProfaneroftheDeadBase {
  constructor (game) {
    super(game, "Profaner of the Dead", "Dragons of Tarkir Promos", "PDTK");
  }
}

module.exports = ProfaneroftheDead;
