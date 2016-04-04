"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ThunderStrikeBase = require("../setM11/ThunderStrike.js");

class ThunderStrike extends ThunderStrikeBase {
  constructor(game) {
    super(game, "Thunder Strike", "Magic 2014 Core Set", "M14");
  }
}

module.exports = ThunderStrike;
