"use strict";
const Constants = require ("../../../Constants");
const AnabaShamanBase = require("../set9ED/AnabaShaman");

class AnabaShaman extends AnabaShamanBase {
  constructor (game) {
    super(game, "Anaba Shaman", "Classic Sixth Edition", "6ED");
  }
}

module.exports = AnabaShaman;
