"use strict";
const Constants = require ("../../../Constants");
const DevouringGreedBase = require("../setMM2/DevouringGreed");

class DevouringGreed extends DevouringGreedBase {
  constructor (game) {
    super(game, "Devouring Greed", "Champions of Kamigawa", "CHK");
  }
}

module.exports = DevouringGreed;
