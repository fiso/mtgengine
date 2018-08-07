"use strict";
const Constants = require ("../../../Constants");
const CrashThroughBase = require("../setM19/CrashThrough");

class CrashThrough extends CrashThroughBase {
  constructor (game) {
    super(game, "Crash Through", "Hour of Devastation", "HOU");
  }
}

module.exports = CrashThrough;
