"use strict";
const Constants = require ("../../../Constants");
const FervorBase = require("../set6ED/Fervor");

class Fervor extends FervorBase {
  constructor(game) {
    super(game, "Fervor", "Weatherlight", "WTH");
  }
}

module.exports = Fervor;
