"use strict";
const Constants = require ("../../../Constants");
const CoercionBase = require("../setBTD/Coercion");

class Coercion extends CoercionBase {
  constructor(game) {
    super(game, "Coercion", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = Coercion;
