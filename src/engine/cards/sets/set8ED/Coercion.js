"use strict";
const Constants = require ("../../../Constants");
const CoercionBase = require("../setTPR/Coercion");

class Coercion extends CoercionBase {
  constructor (game) {
    super(game, "Coercion", "Eighth Edition", "8ED");
  }
}

module.exports = Coercion;
