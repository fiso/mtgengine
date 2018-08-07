"use strict";
const Constants = require ("../../../Constants");
const OrcishLibrarianBase = require("../setTSB/OrcishLibrarian");

class OrcishLibrarian extends OrcishLibrarianBase {
  constructor (game) {
    super(game, "Orcish Librarian", "Ice Age", "ICE");
  }
}

module.exports = OrcishLibrarian;
