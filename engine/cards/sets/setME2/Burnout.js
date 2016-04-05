"use strict";
const Constants = require ("../../../Constants");
const BurnoutBase = require("../setALL/Burnout");

class Burnout extends BurnoutBase {
  constructor(game) {
    super(game, "Burnout", "Masters Edition II", "ME2");
  }
}

module.exports = Burnout;
