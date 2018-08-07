"use strict";
const Constants = require ("../../../Constants");
const HopeofGhirapurBase = require("../setAER/HopeofGhirapur");

class HopeofGhirapur extends HopeofGhirapurBase {
  constructor (game) {
    super(game, "Hope of Ghirapur", "Aether Revolt Promos", "PAER");
  }
}

module.exports = HopeofGhirapur;
