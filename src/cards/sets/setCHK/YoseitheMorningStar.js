"use strict";
const Constants = require ("../../../Constants");
const YoseitheMorningStarBase = require("../setIMA/YoseitheMorningStar");

class YoseitheMorningStar extends YoseitheMorningStarBase {
  constructor (game) {
    super(game, "Yosei, the Morning Star", "Champions of Kamigawa", "CHK");
  }
}

module.exports = YoseitheMorningStar;
