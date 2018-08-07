"use strict";
const Constants = require ("../../../Constants");
const MerfolkSpyBase = require("../setM14/MerfolkSpy");

class MerfolkSpy extends MerfolkSpyBase {
  constructor (game) {
    super(game, "Merfolk Spy", "Magic 2011", "M11");
  }
}

module.exports = MerfolkSpy;
