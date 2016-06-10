"use strict";
const Constants = require ("../../../Constants");
const ArchivistBase = require("../set8ED/Archivist");

class Archivist extends ArchivistBase {
  constructor (game) {
    super(game, "Archivist", "Seventh Edition", "7ED");
  }
}

module.exports = Archivist;
