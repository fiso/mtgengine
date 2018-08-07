"use strict";
const Constants = require ("../../../Constants");
const ScapeshiftBase = require("../setM19/Scapeshift");

class Scapeshift extends ScapeshiftBase {
  constructor (game) {
    super(game, "Scapeshift", "Morningtide", "MOR");
  }
}

module.exports = Scapeshift;
