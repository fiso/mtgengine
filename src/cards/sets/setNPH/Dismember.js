"use strict";
const Constants = require ("../../../Constants");
const DismemberBase = require("../setMM2/Dismember");

class Dismember extends DismemberBase {
  constructor (game) {
    super(game, "Dismember", "New Phyrexia", "NPH");
  }
}

module.exports = Dismember;
