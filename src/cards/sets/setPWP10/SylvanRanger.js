"use strict";
const Constants = require ("../../../Constants");
const SylvanRangerBase = require("../setCMA/SylvanRanger");

class SylvanRanger extends SylvanRangerBase {
  constructor (game) {
    super(game, "Sylvan Ranger", "Wizards Play Network 2010", "PWP10");
  }
}

module.exports = SylvanRanger;
