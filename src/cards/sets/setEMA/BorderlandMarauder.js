"use strict";
const Constants = require ("../../../Constants");
const BorderlandMarauderBase = require("../setBBD/BorderlandMarauder");

class BorderlandMarauder extends BorderlandMarauderBase {
  constructor (game) {
    super(game, "Borderland Marauder", "Eternal Masters", "EMA");
  }
}

module.exports = BorderlandMarauder;
