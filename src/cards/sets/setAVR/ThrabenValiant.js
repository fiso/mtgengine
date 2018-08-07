"use strict";
const Constants = require ("../../../Constants");
const ThrabenValiantBase = require("../setDDL/ThrabenValiant");

class ThrabenValiant extends ThrabenValiantBase {
  constructor (game) {
    super(game, "Thraben Valiant", "Avacyn Restored", "AVR");
  }
}

module.exports = ThrabenValiant;
