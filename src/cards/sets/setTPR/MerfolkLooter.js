"use strict";
const Constants = require ("../../../Constants");
const MerfolkLooterBase = require("../setEXO/MerfolkLooter");

class MerfolkLooter extends MerfolkLooterBase {
  constructor (game) {
    super(game, "Merfolk Looter", "Tempest Remastered", "TPR");
  }
}

module.exports = MerfolkLooter;
