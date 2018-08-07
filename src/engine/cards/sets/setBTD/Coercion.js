"use strict";
const Constants = require ("../../../Constants");
const CoercionBase = require("../setTPR/Coercion");

class Coercion extends CoercionBase {
  constructor (game) {
    super(game, "Coercion", "Beatdown Box Set", "BTD");
  }
}

module.exports = Coercion;
