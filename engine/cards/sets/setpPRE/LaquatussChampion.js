"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LaquatussChampion extends Card {
  constructor(game) {
    super(game, "Laquatus's Champion", "Prerelease Events", "pPRE");
  }
}

module.exports = LaquatussChampion;
