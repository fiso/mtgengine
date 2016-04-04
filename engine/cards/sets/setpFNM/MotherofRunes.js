"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MotherofRunesBase = require("../setDDO/MotherofRunes.js");

class MotherofRunes extends MotherofRunesBase {
  constructor(game) {
    super(game, "Mother of Runes", "Friday Night Magic", "pFNM");
  }
}

module.exports = MotherofRunes;
