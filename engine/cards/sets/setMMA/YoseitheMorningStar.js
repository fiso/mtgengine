"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const YoseitheMorningStarBase = require("../setCHK/YoseitheMorningStar.js");

class YoseitheMorningStar extends YoseitheMorningStarBase {
  constructor(game) {
    super(game, "Yosei, the Morning Star", "Modern Masters", "MMA");
  }
}

module.exports = YoseitheMorningStar;
