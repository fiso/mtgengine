"use strict";
const Constants = require ("../../../Constants");
const TsunamiBase = require("../setME4/Tsunami");

class Tsunami extends TsunamiBase {
  constructor (game) {
    super(game, "Tsunami", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = Tsunami;
