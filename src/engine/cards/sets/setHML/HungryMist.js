"use strict";
const Constants = require ("../../../Constants");
const HungryMistBase = require("../setMED/HungryMist");

class HungryMist extends HungryMistBase {
  constructor (game) {
    super(game, "Hungry Mist", "Homelands", "HML");
  }
}

module.exports = HungryMist;
