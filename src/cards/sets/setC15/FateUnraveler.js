"use strict";
const Constants = require ("../../../Constants");
const FateUnravelerBase = require("../setBNG/FateUnraveler");

class FateUnraveler extends FateUnravelerBase {
  constructor (game) {
    super(game, "Fate Unraveler", "Commander 2015", "C15");
  }
}

module.exports = FateUnraveler;
