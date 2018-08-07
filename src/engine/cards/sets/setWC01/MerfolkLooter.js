"use strict";
const Constants = require ("../../../Constants");
const MerfolkLooterBase = require("../setA25/MerfolkLooter");

class MerfolkLooter extends MerfolkLooterBase {
  constructor (game) {
    super(game, "Merfolk Looter", "World Championship Decks 2001", "WC01");
  }
}

module.exports = MerfolkLooter;
