"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TreasuredFindBase = require("../setDDM/TreasuredFind.js");

class TreasuredFind extends TreasuredFindBase {
  constructor(game) {
    super(game, "Treasured Find", "Return to Ravnica", "RTR");
  }
}

module.exports = TreasuredFind;
