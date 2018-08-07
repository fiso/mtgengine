"use strict";
const Constants = require ("../../../Constants");
const FervorBase = require("../setM13/Fervor");

class Fervor extends FervorBase {
  constructor (game) {
    super(game, "Fervor", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Fervor;
