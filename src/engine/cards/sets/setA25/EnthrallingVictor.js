"use strict";
const Constants = require ("../../../Constants");
const EnthrallingVictorBase = require("../setBBD/EnthrallingVictor");

class EnthrallingVictor extends EnthrallingVictorBase {
  constructor (game) {
    super(game, "Enthralling Victor", "Masters 25", "A25");
  }
}

module.exports = EnthrallingVictor;
