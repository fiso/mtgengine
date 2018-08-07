"use strict";
const Constants = require ("../../../Constants");
const MerfolkSovereignBase = require("../setE02/MerfolkSovereign");

class MerfolkSovereign extends MerfolkSovereignBase {
  constructor (game) {
    super(game, "Merfolk Sovereign", "Magic 2011", "M11");
  }
}

module.exports = MerfolkSovereign;
