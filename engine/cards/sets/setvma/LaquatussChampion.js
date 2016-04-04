"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LaquatussChampionBase = require("../setpPRE/LaquatussChampion.js");

class LaquatussChampion extends LaquatussChampionBase {
  constructor(game) {
    super(game, "Laquatus's Champion", "Vintage Masters", "VMA");
  }
}

module.exports = LaquatussChampion;
