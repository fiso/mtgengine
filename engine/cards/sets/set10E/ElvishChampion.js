"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ElvishChampionBase = require("../setDPA/ElvishChampion.js");

class ElvishChampion extends ElvishChampionBase {
  constructor(game) {
    super(game, "Elvish Champion", "Tenth Edition", "10E");
  }
}

module.exports = ElvishChampion;
