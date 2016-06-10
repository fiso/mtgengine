"use strict";
const Constants = require ("../../../Constants");
const OverrunBase = require("../setATH/Overrun");

class Overrun extends OverrunBase {
  constructor (game) {
    super(game, "Overrun", "Tempest Remastered", "TPR");
  }
}

module.exports = Overrun;
