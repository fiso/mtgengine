"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TormentedHeroBase = require("../setpFNM/TormentedHero.js");

class TormentedHero extends TormentedHeroBase {
  constructor(game) {
    super(game, "Tormented Hero", "Theros", "THS");
  }
}

module.exports = TormentedHero;
