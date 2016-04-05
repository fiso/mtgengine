"use strict";
const Constants = require ("../../../Constants");
const MindStoneBase = require("../setC14/MindStone");

class MindStone extends MindStoneBase {
  constructor(game) {
    super(game, "Mind Stone", "Commander 2015", "C15");
  }
}

module.exports = MindStone;
