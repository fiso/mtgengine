"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MindStoneBase = require("../setC14/MindStone.js");

class MindStone extends MindStoneBase {
  constructor(game) {
    super(game, "Mind Stone", "Tenth Edition", "10E");
  }
}

module.exports = MindStone;
