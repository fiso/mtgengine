"use strict";
const Constants = require ("../../../Constants");
const LibraryofAlexandriaBase = require("../setARN/LibraryofAlexandria");

class LibraryofAlexandria extends LibraryofAlexandriaBase {
  constructor (game) {
    super(game, "Library of Alexandria", "Masters Edition IV", "ME4");
  }
}

module.exports = LibraryofAlexandria;
