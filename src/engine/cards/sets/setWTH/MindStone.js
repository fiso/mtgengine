"use strict";
const Constants = require ("../../../Constants");
const MindStoneBase = require("../setC18/MindStone");

class MindStone extends MindStoneBase {
  constructor (game) {
    super(game, "Mind Stone", "Weatherlight", "WTH");
  }
}

module.exports = MindStone;
