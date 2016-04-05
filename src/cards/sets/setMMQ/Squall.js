"use strict";
const Constants = require ("../../../Constants");
const SquallBase = require("../setME4/Squall");

class Squall extends SquallBase {
  constructor(game) {
    super(game, "Squall", "Mercadian Masques", "MMQ");
  }
}

module.exports = Squall;
