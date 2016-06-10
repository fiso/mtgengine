"use strict";
const Constants = require ("../../../Constants");
const KirtarsWrathBase = require("../setC13/KirtarsWrath");

class KirtarsWrath extends KirtarsWrathBase {
  constructor (game) {
    super(game, "Kirtar's Wrath", "Odyssey", "ODY");
  }
}

module.exports = KirtarsWrath;
