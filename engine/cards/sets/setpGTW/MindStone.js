"use strict";
const Constants = require ("../../../Constants");
const MindStoneBase = require("../setC14/MindStone");

class MindStone extends MindStoneBase {
  constructor(game) {
    super(game, "Mind Stone", "Gateway", "pGTW");
  }
}

module.exports = MindStone;
