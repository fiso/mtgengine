"use strict";
const Constants = require ("../../../Constants");
const OrcishLibrarianBase = require("../setICE/OrcishLibrarian");

class OrcishLibrarian extends OrcishLibrarianBase {
  constructor (game) {
    super(game, "Orcish Librarian", "Time Spiral \"Timeshifted\"", "TSB");
  }
}

module.exports = OrcishLibrarian;
