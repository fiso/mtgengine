"use strict";
const Constants = require ("../../../Constants");
const MinionofLeshracBase = require("../setICE/MinionofLeshrac");

class MinionofLeshrac extends MinionofLeshracBase {
  constructor (game) {
    super(game, "Minion of Leshrac", "Masters Edition II", "ME2");
  }
}

module.exports = MinionofLeshrac;
