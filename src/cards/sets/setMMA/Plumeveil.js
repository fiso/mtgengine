"use strict";
const Constants = require ("../../../Constants");
const PlumeveilBase = require("../setCMD/Plumeveil");

class Plumeveil extends PlumeveilBase {
  constructor(game) {
    super(game, "Plumeveil", "Modern Masters", "MMA");
  }
}

module.exports = Plumeveil;
