"use strict";
const Constants = require ("../../../Constants");
const CoercionBase = require("../setBTD/Coercion");

class Coercion extends CoercionBase {
  constructor (game) {
    super(game, "Coercion", "Starter 1999", "S99");
  }
}

module.exports = Coercion;
