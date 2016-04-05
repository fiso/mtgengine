"use strict";
const Constants = require ("../../../Constants");
const ValleyRannetBase = require("../setARB/ValleyRannet");

class ValleyRannet extends ValleyRannetBase {
  constructor(game) {
    super(game, "Valley Rannet", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = ValleyRannet;
