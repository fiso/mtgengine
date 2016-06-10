"use strict";
const Constants = require ("../../../Constants");
const DismemberBase = require("../setpFNM/Dismember");

class Dismember extends DismemberBase {
  constructor (game) {
    super(game, "Dismember", "New Phyrexia", "NPH");
  }
}

module.exports = Dismember;
