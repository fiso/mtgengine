"use strict";
const Constants = require ("../../../Constants");
const OverruleBase = require("../setDDI/Overrule");

class Overrule extends OverruleBase {
  constructor (game) {
    super(game, "Overrule", "Dissension", "DIS");
  }
}

module.exports = Overrule;
