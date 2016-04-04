"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const InfiniteHourglassBase = require("../set5ED/InfiniteHourglass.js");

class InfiniteHourglass extends InfiniteHourglassBase {
  constructor(game) {
    super(game, "Infinite Hourglass", "Ice Age", "ICE");
  }
}

module.exports = InfiniteHourglass;
