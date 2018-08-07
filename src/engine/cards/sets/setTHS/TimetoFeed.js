"use strict";
const Constants = require ("../../../Constants");
const TimetoFeedBase = require("../setDDO/TimetoFeed");

class TimetoFeed extends TimetoFeedBase {
  constructor (game) {
    super(game, "Time to Feed", "Theros", "THS");
  }
}

module.exports = TimetoFeed;
