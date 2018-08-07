"use strict";
const Constants = require ("../../../Constants");
const RighteousnessBase = require("../setDDL/Righteousness");

class Righteousness extends RighteousnessBase {
  constructor (game) {
    super(game, "Righteousness", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = Righteousness;
