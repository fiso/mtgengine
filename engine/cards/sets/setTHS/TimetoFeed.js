"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TimetoFeedBase = require("../setDDO/TimetoFeed.js");

class TimetoFeed extends TimetoFeedBase {
  constructor(game) {
    super(game, "Time to Feed", "Theros", "THS");
  }
}

module.exports = TimetoFeed;
