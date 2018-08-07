"use strict";
const Constants = require ("../../../Constants");
const AttunementBase = require("../setWC00/Attunement");

class Attunement extends AttunementBase {
  constructor (game) {
    super(game, "Attunement", "Urza's Saga", "USG");
  }
}

module.exports = Attunement;
