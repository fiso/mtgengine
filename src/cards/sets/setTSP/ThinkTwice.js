"use strict";
const Constants = require ("../../../Constants");
const ThinkTwiceBase = require("../setISD/ThinkTwice");

class ThinkTwice extends ThinkTwiceBase {
  constructor(game) {
    super(game, "Think Twice", "Time Spiral", "TSP");
  }
}

module.exports = ThinkTwice;
