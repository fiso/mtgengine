"use strict";
const Constants = require ("../../../Constants");
const YoseitheMorningStarBase = require("../setCHK/YoseitheMorningStar");

class YoseitheMorningStar extends YoseitheMorningStarBase {
  constructor (game) {
    super(game, "Yosei, the Morning Star", "Modern Masters", "MMA");
  }
}

module.exports = YoseitheMorningStar;
