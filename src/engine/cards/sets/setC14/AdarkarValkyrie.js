"use strict";
const Constants = require ("../../../Constants");
const AdarkarValkyrieBase = require("../setC18/AdarkarValkyrie");

class AdarkarValkyrie extends AdarkarValkyrieBase {
  constructor (game) {
    super(game, "Adarkar Valkyrie", "Commander 2014", "C14");
  }
}

module.exports = AdarkarValkyrie;
