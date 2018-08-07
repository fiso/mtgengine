"use strict";
const Constants = require ("../../../Constants");
const MerfolkWayfinderBase = require("../setDDT/MerfolkWayfinder");

class MerfolkWayfinder extends MerfolkWayfinderBase {
  constructor (game) {
    super(game, "Merfolk Wayfinder", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = MerfolkWayfinder;
