"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ValleyRannetBase = require("../setARB/ValleyRannet.js");

class ValleyRannet extends ValleyRannetBase {
  constructor(game) {
    super(game, "Valley Rannet", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = ValleyRannet;
