"use strict";
const Constants = require ("../../../Constants");
const AggravatedAssaultBase = require("../setE02/AggravatedAssault");

class AggravatedAssault extends AggravatedAssaultBase {
  constructor (game) {
    super(game, "Aggravated Assault", "Onslaught", "ONS");
  }
}

module.exports = AggravatedAssault;
