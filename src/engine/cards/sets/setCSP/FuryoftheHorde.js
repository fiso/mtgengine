"use strict";
const Constants = require ("../../../Constants");
const FuryoftheHordeBase = require("../setDDN/FuryoftheHorde");

class FuryoftheHorde extends FuryoftheHordeBase {
  constructor (game) {
    super(game, "Fury of the Horde", "Coldsnap", "CSP");
  }
}

module.exports = FuryoftheHorde;
