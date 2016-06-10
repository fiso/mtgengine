"use strict";
const Constants = require ("../../../Constants");
const MinionofTeveshSzatBase = require("../setICE/MinionofTeveshSzat");

class MinionofTeveshSzat extends MinionofTeveshSzatBase {
  constructor (game) {
    super(game, "Minion of Tevesh Szat", "Masters Edition IV", "ME4");
  }
}

module.exports = MinionofTeveshSzat;
