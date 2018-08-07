"use strict";
const Constants = require ("../../../Constants");
const BlatantThieveryBase = require("../setE02/BlatantThievery");

class BlatantThievery extends BlatantThieveryBase {
  constructor (game) {
    super(game, "Blatant Thievery", "Commander 2015", "C15");
  }
}

module.exports = BlatantThievery;
