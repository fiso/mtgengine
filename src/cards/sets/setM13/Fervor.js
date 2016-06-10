"use strict";
const Constants = require ("../../../Constants");
const FervorBase = require("../set6ED/Fervor");

class Fervor extends FervorBase {
  constructor (game) {
    super(game, "Fervor", "Magic 2013", "M13");
  }
}

module.exports = Fervor;
