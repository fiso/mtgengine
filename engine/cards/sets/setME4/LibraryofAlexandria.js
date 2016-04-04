"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LibraryofAlexandriaBase = require("../setARN/LibraryofAlexandria.js");

class LibraryofAlexandria extends LibraryofAlexandriaBase {
  constructor(game) {
    super(game, "Library of Alexandria", "Masters Edition IV", "ME4");
  }
}

module.exports = LibraryofAlexandria;
