"use strict";
const Constants = require ("../../../Constants");
const MerfolkLooterBase = require("../setA25/MerfolkLooter");

class MerfolkLooter extends MerfolkLooterBase {
  constructor (game) {
    super(game, "Merfolk Looter", "Magic 2010", "M10");
  }
}

module.exports = MerfolkLooter;
