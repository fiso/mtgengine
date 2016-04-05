"use strict";
const Constants = require ("../../../Constants");
const BlatantThieveryBase = require("../setC15/BlatantThievery");

class BlatantThievery extends BlatantThieveryBase {
  constructor(game) {
    super(game, "Blatant Thievery", "Onslaught", "ONS");
  }
}

module.exports = BlatantThievery;
