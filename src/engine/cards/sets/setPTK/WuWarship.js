"use strict";
const Constants = require ("../../../Constants");
const WuWarshipBase = require("../setME3/WuWarship");

class WuWarship extends WuWarshipBase {
  constructor (game) {
    super(game, "Wu Warship", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = WuWarship;
