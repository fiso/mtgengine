"use strict";
const Constants = require ("../../../Constants");
const MortarpodBase = require("../setMM2/Mortarpod");

class Mortarpod extends MortarpodBase {
  constructor (game) {
    super(game, "Mortarpod", "Mirrodin Besieged", "MBS");
  }
}

module.exports = Mortarpod;
