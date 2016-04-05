"use strict";
const Constants = require ("../../../Constants");
const ScourBase = require("../setBOK/Scour");

class Scour extends ScourBase {
  constructor(game) {
    super(game, "Scour", "Urza's Destiny", "UDS");
  }
}

module.exports = Scour;
