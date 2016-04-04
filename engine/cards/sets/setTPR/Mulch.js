"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MulchBase = require("../setC15/Mulch.js");

class Mulch extends MulchBase {
  constructor(game) {
    super(game, "Mulch", "Tempest Remastered", "TPR");
  }
}

module.exports = Mulch;
