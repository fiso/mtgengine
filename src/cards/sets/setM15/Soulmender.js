"use strict";
const Constants = require ("../../../Constants");
const SoulmenderBase = require("../setM14/Soulmender");

class Soulmender extends SoulmenderBase {
  constructor (game) {
    super(game, "Soulmender", "Magic 2015 Core Set", "M15");
  }
}

module.exports = Soulmender;
