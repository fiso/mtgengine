"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const YouthfulKnightBase = require("../setATH/YouthfulKnight.js");

class YouthfulKnight extends YouthfulKnightBase {
  constructor(game) {
    super(game, "Youthful Knight", "Stronghold", "STH");
  }
}

module.exports = YouthfulKnight;
