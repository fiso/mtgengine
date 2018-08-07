"use strict";
const Constants = require ("../../../Constants");
const ReforgetheSoulBase = require("../setC16/ReforgetheSoul");

class ReforgetheSoul extends ReforgetheSoulBase {
  constructor (game) {
    super(game, "Reforge the Soul", "Avacyn Restored", "AVR");
  }
}

module.exports = ReforgetheSoul;
