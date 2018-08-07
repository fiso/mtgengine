"use strict";
const Constants = require ("../../../Constants");
const FervorBase = require("../setM13/Fervor");

class Fervor extends FervorBase {
  constructor (game) {
    super(game, "Fervor", "Seventh Edition", "7ED");
  }
}

module.exports = Fervor;
