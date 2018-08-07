"use strict";
const Constants = require ("../../../Constants");
const PlumeveilBase = require("../setMMA/Plumeveil");

class Plumeveil extends PlumeveilBase {
  constructor (game) {
    super(game, "Plumeveil", "Shadowmoor", "SHM");
  }
}

module.exports = Plumeveil;
