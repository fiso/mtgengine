"use strict";
const Constants = require ("../../../Constants");
const OathofNissaBase = require("../setOGW/OathofNissa");

class OathofNissa extends OathofNissaBase {
  constructor (game) {
    super(game, "Oath of Nissa", "Oath of the Gatewatch Promos", "POGW");
  }
}

module.exports = OathofNissa;
