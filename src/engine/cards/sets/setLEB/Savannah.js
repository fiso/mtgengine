"use strict";
const Constants = require ("../../../Constants");
const SavannahBase = require("../setVMA/Savannah");

class Savannah extends SavannahBase {
  constructor (game) {
    super(game, "Savannah", "Limited Edition Beta", "LEB");
  }
}

module.exports = Savannah;
