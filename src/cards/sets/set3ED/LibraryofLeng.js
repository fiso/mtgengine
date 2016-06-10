"use strict";
const Constants = require ("../../../Constants");
const LibraryofLengBase = require("../setCED/LibraryofLeng");

class LibraryofLeng extends LibraryofLengBase {
  constructor (game) {
    super(game, "Library of Leng", "Revised Edition", "3ED");
  }
}

module.exports = LibraryofLeng;
