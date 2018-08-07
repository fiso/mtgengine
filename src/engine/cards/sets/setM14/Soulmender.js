"use strict";
const Constants = require ("../../../Constants");
const SoulmenderBase = require("../setM15/Soulmender");

class Soulmender extends SoulmenderBase {
  constructor (game) {
    super(game, "Soulmender", "Magic 2014", "M14");
  }
}

module.exports = Soulmender;
