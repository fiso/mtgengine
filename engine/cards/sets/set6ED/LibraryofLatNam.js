"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LibraryofLatNamBase = require("../setALL/LibraryofLatNam.js");

class LibraryofLatNam extends LibraryofLatNamBase {
  constructor(game) {
    super(game, "Library of Lat-Nam", "Classic Sixth Edition", "6ED");
  }
}

module.exports = LibraryofLatNam;
