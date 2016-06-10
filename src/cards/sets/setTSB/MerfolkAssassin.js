"use strict";
const Constants = require ("../../../Constants");
const MerfolkAssassinBase = require("../setDRK/MerfolkAssassin");

class MerfolkAssassin extends MerfolkAssassinBase {
  constructor (game) {
    super(game, "Merfolk Assassin", "Time Spiral \"Timeshifted\"", "TSB");
  }
}

module.exports = MerfolkAssassin;
