"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MerfolkofthePearlTridentBase = require("../set6ED/MerfolkofthePearlTrident.js");

class MerfolkofthePearlTrident extends MerfolkofthePearlTridentBase {
  constructor(game) {
    super(game, "Merfolk of the Pearl Trident", "Starter 1999", "S99");
  }
}

module.exports = MerfolkofthePearlTrident;
