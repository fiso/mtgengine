"use strict";
const Constants = require ("../../../Constants");
const KirtarsWrathBase = require("../setCMA/KirtarsWrath");

class KirtarsWrath extends KirtarsWrathBase {
  constructor (game) {
    super(game, "Kirtar's Wrath", "Commander 2013", "C13");
  }
}

module.exports = KirtarsWrath;
