"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MycosynthLattice extends UnimplementedCard {
  constructor (game) {
    super(game, "Mycosynth Lattice", "Darksteel", "DST");
  }
}

module.exports = MycosynthLattice;
