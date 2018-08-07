"use strict";
const Constants = require ("../../../Constants");
const JacesArchivistBase = require("../setC15/JacesArchivist");

class JacesArchivist extends JacesArchivistBase {
  constructor (game) {
    super(game, "Jace's Archivist", "Commander 2013", "C13");
  }
}

module.exports = JacesArchivist;
