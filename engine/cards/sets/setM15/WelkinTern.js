"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WelkinTernBase = require("../setM13/WelkinTern.js");

class WelkinTern extends WelkinTernBase {
  constructor(game) {
    super(game, "Welkin Tern", "Magic 2015 Core Set", "M15");
  }
}

module.exports = WelkinTern;
