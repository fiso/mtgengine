"use strict";
const Constants = require ("../../../Constants");
const AdarkarValkyrieBase = require("../setCSP/AdarkarValkyrie");

class AdarkarValkyrie extends AdarkarValkyrieBase {
  constructor (game) {
    super(game, "Adarkar Valkyrie", "Modern Masters", "MMA");
  }
}

module.exports = AdarkarValkyrie;
