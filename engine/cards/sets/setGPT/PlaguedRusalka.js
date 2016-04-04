"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PlaguedRusalkaBase = require("../setDDJ/PlaguedRusalka.js");

class PlaguedRusalka extends PlaguedRusalkaBase {
  constructor(game) {
    super(game, "Plagued Rusalka", "Guildpact", "GPT");
  }
}

module.exports = PlaguedRusalka;
