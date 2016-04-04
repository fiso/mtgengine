"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MerfolkofthePearlTridentBase = require("../set6ED/MerfolkofthePearlTrident.js");

class MerfolkofthePearlTrident extends MerfolkofthePearlTridentBase {
  constructor(game) {
    super(game, "Merfolk of the Pearl Trident", "Unlimited Edition", "2ED");
  }
}

module.exports = MerfolkofthePearlTrident;
