"use strict";
const Constants = require ("../../../Constants");
const SunderBase = require("../setMP2/Sunder");

class Sunder extends SunderBase {
  constructor (game) {
    super(game, "Sunder", "Urza's Saga", "USG");
  }
}

module.exports = Sunder;
