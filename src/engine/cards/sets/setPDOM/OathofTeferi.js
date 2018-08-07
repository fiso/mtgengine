"use strict";
const Constants = require ("../../../Constants");
const OathofTeferiBase = require("../setDOM/OathofTeferi");

class OathofTeferi extends OathofTeferiBase {
  constructor (game) {
    super(game, "Oath of Teferi", "Dominaria Promos", "PDOM");
  }
}

module.exports = OathofTeferi;
