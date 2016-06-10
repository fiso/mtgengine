"use strict";
const Constants = require ("../../../Constants");
const TranquilGroveBase = require("../set6ED/TranquilGrove");

class TranquilGrove extends TranquilGroveBase {
  constructor (game) {
    super(game, "Tranquil Grove", "Weatherlight", "WTH");
  }
}

module.exports = TranquilGrove;
