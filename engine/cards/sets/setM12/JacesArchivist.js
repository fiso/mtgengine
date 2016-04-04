"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const JacesArchivistBase = require("../setC13/JacesArchivist.js");

class JacesArchivist extends JacesArchivistBase {
  constructor(game) {
    super(game, "Jace's Archivist", "Magic 2012", "M12");
  }
}

module.exports = JacesArchivist;
