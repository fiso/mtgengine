"use strict";
const Constants = require ("../../../Constants");
const HourofRevelationBase = require("../setHOU/HourofRevelation");

class HourofRevelation extends HourofRevelationBase {
  constructor (game) {
    super(game, "Hour of Revelation", "Hour of Devastation Promos", "PHOU");
  }
}

module.exports = HourofRevelation;
