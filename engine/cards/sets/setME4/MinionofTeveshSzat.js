"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MinionofTeveshSzatBase = require("../setICE/MinionofTeveshSzat.js");

class MinionofTeveshSzat extends MinionofTeveshSzatBase {
  constructor(game) {
    super(game, "Minion of Tevesh Szat", "Masters Edition IV", "ME4");
  }
}

module.exports = MinionofTeveshSzat;
