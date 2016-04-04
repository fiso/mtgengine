"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const JacesArchivistBase = require("../setC13/JacesArchivist.js");

class JacesArchivist extends JacesArchivistBase {
  constructor(game) {
    super(game, "Jace's Archivist", "Commander 2015", "C15");
  }
}

module.exports = JacesArchivist;
