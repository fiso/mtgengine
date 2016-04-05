"use strict";
const Constants = require ("../../../Constants");
const FervorBase = require("../set6ED/Fervor");

class Fervor extends FervorBase {
  constructor(game) {
    super(game, "Fervor", "Seventh Edition", "7ED");
  }
}

module.exports = Fervor;
