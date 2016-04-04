"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TranquilGrove extends Card {
  constructor(game) {
    super(game, "Tranquil Grove", "Classic Sixth Edition", "6ED");
  }
}

module.exports = TranquilGrove;
