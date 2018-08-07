"use strict";
const Constants = require ("../../../Constants");
const ArchivistBase = require("../set9ED/Archivist");

class Archivist extends ArchivistBase {
  constructor (game) {
    super(game, "Archivist", "Urza's Legacy", "ULG");
  }
}

module.exports = Archivist;
