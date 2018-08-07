"use strict";
const Constants = require ("../../../Constants");
const MerfolkofthePearlTridentBase = require("../setM13/MerfolkofthePearlTrident");

class MerfolkofthePearlTrident extends MerfolkofthePearlTridentBase {
  constructor (game) {
    super(game, "Merfolk of the Pearl Trident", "World Championship Decks 2001", "WC01");
  }
}

module.exports = MerfolkofthePearlTrident;
