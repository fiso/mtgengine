"use strict";
const Constants = require ("../../../Constants");
const TormentedHeroBase = require("../setF14/TormentedHero");

class TormentedHero extends TormentedHeroBase {
  constructor (game) {
    super(game, "Tormented Hero", "Magic Online Promos", "PRM");
  }
}

module.exports = TormentedHero;
