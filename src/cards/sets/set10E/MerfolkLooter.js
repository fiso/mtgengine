"use strict";
const Constants = require ("../../../Constants");
const MerfolkLooterBase = require("../setEXO/MerfolkLooter");

class MerfolkLooter extends MerfolkLooterBase {
  constructor (game) {
    super(game, "Merfolk Looter", "Tenth Edition", "10E");
  }
}

module.exports = MerfolkLooter;
