"use strict";
const Constants = require ("../../../Constants");
const AnabaShamanBase = require("../set6ED/AnabaShaman");

class AnabaShaman extends AnabaShamanBase {
  constructor(game) {
    super(game, "Anaba Shaman", "Ninth Edition", "9ED");
  }
}

module.exports = AnabaShaman;
