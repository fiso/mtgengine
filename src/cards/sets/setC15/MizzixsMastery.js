"use strict";
const Constants = require ("../../../Constants");
const MizzixsMasteryBase = require("../setPZ1/MizzixsMastery");

class MizzixsMastery extends MizzixsMasteryBase {
  constructor (game) {
    super(game, "Mizzix's Mastery", "Commander 2015", "C15");
  }
}

module.exports = MizzixsMastery;
