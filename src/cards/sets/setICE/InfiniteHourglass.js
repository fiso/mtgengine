"use strict";
const Constants = require ("../../../Constants");
const InfiniteHourglassBase = require("../set5ED/InfiniteHourglass");

class InfiniteHourglass extends InfiniteHourglassBase {
  constructor (game) {
    super(game, "Infinite Hourglass", "Ice Age", "ICE");
  }
}

module.exports = InfiniteHourglass;
