"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OrcishLibrarianBase = require("../setICE/OrcishLibrarian.js");

class OrcishLibrarian extends OrcishLibrarianBase {
  constructor(game) {
    super(game, "Orcish Librarian", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = OrcishLibrarian;
