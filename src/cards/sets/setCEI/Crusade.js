"use strict";
const Constants = require ("../../../Constants");
const CrusadeBase = require("../setDDF/Crusade");

class Crusade extends CrusadeBase {
  constructor (game) {
    super(game, "Crusade", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = Crusade;
