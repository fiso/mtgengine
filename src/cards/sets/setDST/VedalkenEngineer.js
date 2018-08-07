"use strict";
const Constants = require ("../../../Constants");
const VedalkenEngineerBase = require("../setC16/VedalkenEngineer");

class VedalkenEngineer extends VedalkenEngineerBase {
  constructor (game) {
    super(game, "Vedalken Engineer", "Darksteel", "DST");
  }
}

module.exports = VedalkenEngineer;
