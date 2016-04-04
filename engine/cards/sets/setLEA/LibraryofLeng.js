"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LibraryofLengBase = require("../setCED/LibraryofLeng.js");

class LibraryofLeng extends LibraryofLengBase {
  constructor(game) {
    super(game, "Library of Leng", "Limited Edition Alpha", "LEA");
  }
}

module.exports = LibraryofLeng;
