"use strict";
const Constants = require ("../../../Constants");
const LibraryofAlexandriaBase = require("../setARN/LibraryofAlexandria");

class LibraryofAlexandria extends LibraryofAlexandriaBase {
  constructor(game) {
    super(game, "Library of Alexandria", "Vintage Masters", "VMA");
  }
}

module.exports = LibraryofAlexandria;
