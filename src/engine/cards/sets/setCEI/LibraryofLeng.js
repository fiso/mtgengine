"use strict";
const Constants = require ("../../../Constants");
const LibraryofLengBase = require("../setME4/LibraryofLeng");

class LibraryofLeng extends LibraryofLengBase {
  constructor (game) {
    super(game, "Library of Leng", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = LibraryofLeng;
