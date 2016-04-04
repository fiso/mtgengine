"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ElvishBerserkerBase = require("../setEXO/ElvishBerserker.js");

class ElvishBerserker extends ElvishBerserkerBase {
  constructor(game) {
    super(game, "Elvish Berserker", "Tenth Edition", "10E");
  }
}

module.exports = ElvishBerserker;
