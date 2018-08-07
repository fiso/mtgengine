"use strict";
const Constants = require ("../../../Constants");
const YouthfulKnightBase = require("../setE01/YouthfulKnight");

class YouthfulKnight extends YouthfulKnightBase {
  constructor (game) {
    super(game, "Youthful Knight", "Anthologies", "ATH");
  }
}

module.exports = YouthfulKnight;
