"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MerfolkLooterBase = require("../setEXO/MerfolkLooter.js");

class MerfolkLooter extends MerfolkLooterBase {
  constructor(game) {
    super(game, "Merfolk Looter", "Magic 2012", "M12");
  }
}

module.exports = MerfolkLooter;
