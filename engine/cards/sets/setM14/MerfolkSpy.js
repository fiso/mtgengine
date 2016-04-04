"use strict";
const Constants = require ("../../../Constants");
const MerfolkSpyBase = require("../setM11/MerfolkSpy");

class MerfolkSpy extends MerfolkSpyBase {
  constructor(game) {
    super(game, "Merfolk Spy", "Magic 2014 Core Set", "M14");
  }
}

module.exports = MerfolkSpy;
