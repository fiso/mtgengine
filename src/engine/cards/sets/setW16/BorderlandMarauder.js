"use strict";
const Constants = require ("../../../Constants");
const BorderlandMarauderBase = require("../setBBD/BorderlandMarauder");

class BorderlandMarauder extends BorderlandMarauderBase {
  constructor (game) {
    super(game, "Borderland Marauder", "Welcome Deck 2016", "W16");
  }
}

module.exports = BorderlandMarauder;
