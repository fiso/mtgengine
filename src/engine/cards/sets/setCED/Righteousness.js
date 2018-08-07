"use strict";
const Constants = require ("../../../Constants");
const RighteousnessBase = require("../setDDL/Righteousness");

class Righteousness extends RighteousnessBase {
  constructor (game) {
    super(game, "Righteousness", "Collectors’ Edition", "CED");
  }
}

module.exports = Righteousness;
