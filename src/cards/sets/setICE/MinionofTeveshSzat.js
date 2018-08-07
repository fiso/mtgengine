"use strict";
const Constants = require ("../../../Constants");
const MinionofTeveshSzatBase = require("../setME4/MinionofTeveshSzat");

class MinionofTeveshSzat extends MinionofTeveshSzatBase {
  constructor (game) {
    super(game, "Minion of Tevesh Szat", "Ice Age", "ICE");
  }
}

module.exports = MinionofTeveshSzat;
