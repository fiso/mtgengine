"use strict";
const Constants = require ("../../../Constants");
const PlumeveilBase = require("../setMMA/Plumeveil");

class Plumeveil extends PlumeveilBase {
  constructor (game) {
    super(game, "Plumeveil", "Commander 2011", "CMD");
  }
}

module.exports = Plumeveil;
