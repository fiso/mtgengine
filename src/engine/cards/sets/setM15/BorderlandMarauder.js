"use strict";
const Constants = require ("../../../Constants");
const BorderlandMarauderBase = require("../setBBD/BorderlandMarauder");

class BorderlandMarauder extends BorderlandMarauderBase {
  constructor (game) {
    super(game, "Borderland Marauder", "Magic 2015", "M15");
  }
}

module.exports = BorderlandMarauder;
