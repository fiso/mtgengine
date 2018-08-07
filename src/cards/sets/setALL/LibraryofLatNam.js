"use strict";
const Constants = require ("../../../Constants");
const LibraryofLatNamBase = require("../set6ED/LibraryofLatNam");

class LibraryofLatNam extends LibraryofLatNamBase {
  constructor (game) {
    super(game, "Library of Lat-Nam", "Alliances", "ALL");
  }
}

module.exports = LibraryofLatNam;
