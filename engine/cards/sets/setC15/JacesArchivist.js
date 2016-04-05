"use strict";
const Constants = require ("../../../Constants");
const JacesArchivistBase = require("../setC13/JacesArchivist");

class JacesArchivist extends JacesArchivistBase {
  constructor(game) {
    super(game, "Jace's Archivist", "Commander 2015", "C15");
  }
}

module.exports = JacesArchivist;
