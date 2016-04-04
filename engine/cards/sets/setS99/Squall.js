"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SquallBase = require("../setME4/Squall.js");

class Squall extends SquallBase {
  constructor(game) {
    super(game, "Squall", "Starter 1999", "S99");
  }
}

module.exports = Squall;
