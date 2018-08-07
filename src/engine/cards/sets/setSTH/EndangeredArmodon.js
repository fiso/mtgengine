"use strict";
const Constants = require ("../../../Constants");
const EndangeredArmodonBase = require("../setTPR/EndangeredArmodon");

class EndangeredArmodon extends EndangeredArmodonBase {
  constructor (game) {
    super(game, "Endangered Armodon", "Stronghold", "STH");
  }
}

module.exports = EndangeredArmodon;
