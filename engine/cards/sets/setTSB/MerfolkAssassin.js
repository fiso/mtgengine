"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MerfolkAssassinBase = require("../setDRK/MerfolkAssassin.js");

class MerfolkAssassin extends MerfolkAssassinBase {
  constructor(game) {
    super(game, "Merfolk Assassin", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = MerfolkAssassin;
