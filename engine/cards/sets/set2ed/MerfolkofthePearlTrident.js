"use strict";
const Constants = require ("../../../Constants");
const MerfolkofthePearlTridentBase = require("../set6ED/MerfolkofthePearlTrident");

class MerfolkofthePearlTrident extends MerfolkofthePearlTridentBase {
  constructor(game) {
    super(game, "Merfolk of the Pearl Trident", "Unlimited Edition", "2ED");
  }
}

module.exports = MerfolkofthePearlTrident;
