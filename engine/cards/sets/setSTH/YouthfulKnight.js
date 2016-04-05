"use strict";
const Constants = require ("../../../Constants");
const YouthfulKnightBase = require("../setATH/YouthfulKnight");

class YouthfulKnight extends YouthfulKnightBase {
  constructor(game) {
    super(game, "Youthful Knight", "Stronghold", "STH");
  }
}

module.exports = YouthfulKnight;
