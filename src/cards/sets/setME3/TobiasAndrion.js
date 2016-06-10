"use strict";
const Constants = require ("../../../Constants");
const TobiasAndrionBase = require("../setCHR/TobiasAndrion");

class TobiasAndrion extends TobiasAndrionBase {
  constructor (game) {
    super(game, "Tobias Andrion", "Masters Edition III", "ME3");
  }
}

module.exports = TobiasAndrion;
