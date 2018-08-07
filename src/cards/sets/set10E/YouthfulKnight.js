"use strict";
const Constants = require ("../../../Constants");
const YouthfulKnightBase = require("../setE01/YouthfulKnight");

class YouthfulKnight extends YouthfulKnightBase {
  constructor (game) {
    super(game, "Youthful Knight", "Tenth Edition", "10E");
  }
}

module.exports = YouthfulKnight;
