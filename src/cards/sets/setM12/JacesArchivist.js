"use strict";
const Constants = require ("../../../Constants");
const JacesArchivistBase = require("../setC13/JacesArchivist");

class JacesArchivist extends JacesArchivistBase {
  constructor(game) {
    super(game, "Jace's Archivist", "Magic 2012", "M12");
  }
}

module.exports = JacesArchivist;
