"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LaquatussChampion extends UnimplementedCard {
  constructor (game) {
    super(game, "Laquatus's Champion", "Prerelease Events", "pPRE");
  }
}

module.exports = LaquatussChampion;
