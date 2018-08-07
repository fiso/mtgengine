"use strict";
const Constants = require ("../../../Constants");
const TreasuredFindBase = require("../setDDM/TreasuredFind");

class TreasuredFind extends TreasuredFindBase {
  constructor (game) {
    super(game, "Treasured Find", "Return to Ravnica", "RTR");
  }
}

module.exports = TreasuredFind;
