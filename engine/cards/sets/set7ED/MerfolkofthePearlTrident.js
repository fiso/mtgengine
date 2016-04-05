"use strict";
const Constants = require ("../../../Constants");
const MerfolkofthePearlTridentBase = require("../set6ED/MerfolkofthePearlTrident");

class MerfolkofthePearlTrident extends MerfolkofthePearlTridentBase {
  constructor(game) {
    super(game, "Merfolk of the Pearl Trident", "Seventh Edition", "7ED");
  }
}

module.exports = MerfolkofthePearlTrident;
