"use strict";
const Constants = require ("../../../Constants");
const EnthrallingVictorBase = require("../setBBD/EnthrallingVictor");

class EnthrallingVictor extends EnthrallingVictorBase {
  constructor (game) {
    super(game, "Enthralling Victor", "Magic Origins", "ORI");
  }
}

module.exports = EnthrallingVictor;
