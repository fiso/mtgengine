"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TranquilGroveBase = require("../set6ED/TranquilGrove.js");

class TranquilGrove extends TranquilGroveBase {
  constructor(game) {
    super(game, "Tranquil Grove", "Weatherlight", "WTH");
  }
}

module.exports = TranquilGrove;
