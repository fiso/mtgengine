"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StuporBase = require("../setpARL/Stupor.js");

class Stupor extends StuporBase {
  constructor(game) {
    super(game, "Stupor", "Mirage", "MIR");
  }
}

module.exports = Stupor;
