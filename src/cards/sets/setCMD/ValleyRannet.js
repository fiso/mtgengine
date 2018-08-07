"use strict";
const Constants = require ("../../../Constants");
const ValleyRannetBase = require("../setC13/ValleyRannet");

class ValleyRannet extends ValleyRannetBase {
  constructor (game) {
    super(game, "Valley Rannet", "Commander 2011", "CMD");
  }
}

module.exports = ValleyRannet;
