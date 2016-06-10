"use strict";
const Constants = require ("../../../Constants");
const ValleyRannetBase = require("../setARB/ValleyRannet");

class ValleyRannet extends ValleyRannetBase {
  constructor (game) {
    super(game, "Valley Rannet", "Commander 2013 Edition", "C13");
  }
}

module.exports = ValleyRannet;
