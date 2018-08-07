"use strict";
const Constants = require ("../../../Constants");
const MerfolkSovereignBase = require("../setE02/MerfolkSovereign");

class MerfolkSovereign extends MerfolkSovereignBase {
  constructor (game) {
    super(game, "Merfolk Sovereign", "Magic 2010", "M10");
  }
}

module.exports = MerfolkSovereign;
