"use strict";
const Constants = require ("../../../Constants");
const FortifiedAreaBase = require("../set4ED/FortifiedArea");

class FortifiedArea extends FortifiedAreaBase {
  constructor (game) {
    super(game, "Fortified Area", "Legends", "LEG");
  }
}

module.exports = FortifiedArea;
