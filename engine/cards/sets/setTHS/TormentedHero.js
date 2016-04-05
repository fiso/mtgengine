"use strict";
const Constants = require ("../../../Constants");
const TormentedHeroBase = require("../setpFNM/TormentedHero");

class TormentedHero extends TormentedHeroBase {
  constructor(game) {
    super(game, "Tormented Hero", "Theros", "THS");
  }
}

module.exports = TormentedHero;
