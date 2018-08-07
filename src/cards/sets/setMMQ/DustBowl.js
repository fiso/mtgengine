"use strict";
const Constants = require ("../../../Constants");
const DustBowlBase = require("../setEXP/DustBowl");

class DustBowl extends DustBowlBase {
  constructor (game) {
    super(game, "Dust Bowl", "Mercadian Masques", "MMQ");
  }
}

module.exports = DustBowl;
