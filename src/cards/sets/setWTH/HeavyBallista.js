"use strict";
const Constants = require ("../../../Constants");
const HeavyBallistaBase = require("../set7ED/HeavyBallista");

class HeavyBallista extends HeavyBallistaBase {
  constructor (game) {
    super(game, "Heavy Ballista", "Weatherlight", "WTH");
  }
}

module.exports = HeavyBallista;
