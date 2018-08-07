"use strict";
const Constants = require ("../../../Constants");
const MycosynthLatticeBase = require("../setBBD/MycosynthLattice");

class MycosynthLattice extends MycosynthLatticeBase {
  constructor (game) {
    super(game, "Mycosynth Lattice", "Darksteel", "DST");
  }
}

module.exports = MycosynthLattice;
