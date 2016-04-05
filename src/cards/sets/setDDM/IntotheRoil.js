"use strict";
const Constants = require ("../../../Constants");
const IntotheRoilBase = require("../setC14/IntotheRoil");

class IntotheRoil extends IntotheRoilBase {
  constructor(game) {
    super(game, "Into the Roil", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = IntotheRoil;
