"use strict";
const Constants = require ("../../../Constants");
const LifeforceBase = require("../setME4/Lifeforce");

class Lifeforce extends LifeforceBase {
  constructor (game) {
    super(game, "Lifeforce", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = Lifeforce;
