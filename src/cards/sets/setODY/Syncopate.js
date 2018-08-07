"use strict";
const Constants = require ("../../../Constants");
const SyncopateBase = require("../setDOM/Syncopate");

class Syncopate extends SyncopateBase {
  constructor (game) {
    super(game, "Syncopate", "Odyssey", "ODY");
  }
}

module.exports = Syncopate;
