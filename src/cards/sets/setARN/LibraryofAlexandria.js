"use strict";
const Constants = require ("../../../Constants");
const LibraryofAlexandriaBase = require("../setVMA/LibraryofAlexandria");

class LibraryofAlexandria extends LibraryofAlexandriaBase {
  constructor (game) {
    super(game, "Library of Alexandria", "Arabian Nights", "ARN");
  }
}

module.exports = LibraryofAlexandria;
