"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LibraryofAlexandriaBase = require("../setARN/LibraryofAlexandria.js");

class LibraryofAlexandria extends LibraryofAlexandriaBase {
  constructor(game) {
    super(game, "Library of Alexandria", "Vintage Masters", "VMA");
  }
}

module.exports = LibraryofAlexandria;
