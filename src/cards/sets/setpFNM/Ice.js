"use strict";
const Constants = require ("../../../Constants");
const IceBase = require("../setAPC/Ice");

class Ice extends IceBase {
  constructor (game) {
    super(game, "Ice", "Friday Night Magic", "pFNM");
  }
}

module.exports = Ice;
