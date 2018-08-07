"use strict";
const Constants = require ("../../../Constants");
const ScapeshiftBase = require("../setM19/Scapeshift");

class Scapeshift extends ScapeshiftBase {
  constructor (game) {
    super(game, "Scapeshift", "Magic Online Promos", "PRM");
  }
}

module.exports = Scapeshift;
