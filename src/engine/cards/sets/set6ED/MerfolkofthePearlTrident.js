"use strict";
const Constants = require ("../../../Constants");
const MerfolkofthePearlTridentBase = require("../setM13/MerfolkofthePearlTrident");

class MerfolkofthePearlTrident extends MerfolkofthePearlTridentBase {
  constructor (game) {
    super(game, "Merfolk of the Pearl Trident", "Classic Sixth Edition", "6ED");
  }
}

module.exports = MerfolkofthePearlTrident;
