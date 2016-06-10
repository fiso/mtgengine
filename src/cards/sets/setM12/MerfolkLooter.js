"use strict";
const Constants = require ("../../../Constants");
const MerfolkLooterBase = require("../setEXO/MerfolkLooter");

class MerfolkLooter extends MerfolkLooterBase {
  constructor (game) {
    super(game, "Merfolk Looter", "Magic 2012", "M12");
  }
}

module.exports = MerfolkLooter;
