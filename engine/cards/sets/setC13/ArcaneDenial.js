"use strict";
const Constants = require ("../../../Constants");
const ArcaneDenialBase = require("../setALL/ArcaneDenial");

class ArcaneDenial extends ArcaneDenialBase {
  constructor(game) {
    super(game, "Arcane Denial", "Commander 2013 Edition", "C13");
  }
}

module.exports = ArcaneDenial;
