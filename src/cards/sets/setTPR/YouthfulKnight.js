"use strict";
const Constants = require ("../../../Constants");
const YouthfulKnightBase = require("../setATH/YouthfulKnight");

class YouthfulKnight extends YouthfulKnightBase {
  constructor (game) {
    super(game, "Youthful Knight", "Tempest Remastered", "TPR");
  }
}

module.exports = YouthfulKnight;
