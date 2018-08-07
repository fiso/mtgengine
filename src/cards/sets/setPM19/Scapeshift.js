"use strict";
const Constants = require ("../../../Constants");
const ScapeshiftBase = require("../setM19/Scapeshift");

class Scapeshift extends ScapeshiftBase {
  constructor (game) {
    super(game, "Scapeshift", "Core Set 2019 Promos", "PM19");
  }
}

module.exports = Scapeshift;
