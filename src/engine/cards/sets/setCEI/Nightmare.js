"use strict";
const Constants = require ("../../../Constants");
const NightmareBase = require("../setW17/Nightmare");

class Nightmare extends NightmareBase {
  constructor (game) {
    super(game, "Nightmare", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = Nightmare;
