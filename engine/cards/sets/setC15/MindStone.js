"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MindStoneBase = require("../setC14/MindStone.js");

class MindStone extends MindStoneBase {
  constructor(game) {
    super(game, "Mind Stone", "Commander 2015", "C15");
  }
}

module.exports = MindStone;
