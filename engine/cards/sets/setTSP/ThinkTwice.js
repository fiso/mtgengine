"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ThinkTwiceBase = require("../setISD/ThinkTwice.js");

class ThinkTwice extends ThinkTwiceBase {
  constructor(game) {
    super(game, "Think Twice", "Time Spiral", "TSP");
  }
}

module.exports = ThinkTwice;
