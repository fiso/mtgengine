"use strict";
const Constants = require ("../../../Constants");
const MerfolkAssassinBase = require("../setTSB/MerfolkAssassin");

class MerfolkAssassin extends MerfolkAssassinBase {
  constructor (game) {
    super(game, "Merfolk Assassin", "The Dark", "DRK");
  }
}

module.exports = MerfolkAssassin;
