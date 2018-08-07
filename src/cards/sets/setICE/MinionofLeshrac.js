"use strict";
const Constants = require ("../../../Constants");
const MinionofLeshracBase = require("../setME2/MinionofLeshrac");

class MinionofLeshrac extends MinionofLeshracBase {
  constructor (game) {
    super(game, "Minion of Leshrac", "Ice Age", "ICE");
  }
}

module.exports = MinionofLeshrac;
