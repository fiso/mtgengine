"use strict";
const Constants = require ("../../../Constants");
const BlessingBase = require("../setM14/Blessing");

class Blessing extends BlessingBase {
  constructor (game) {
    super(game, "Blessing", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = Blessing;
