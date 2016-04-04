"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DingusEggBase = require("../set6ED/DingusEgg.js");

class DingusEgg extends DingusEggBase {
  constructor(game) {
    super(game, "Dingus Egg", "International Collector's Edition", "CEI");
  }
}

module.exports = DingusEgg;
