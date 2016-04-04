"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OverrunBase = require("../setATH/Overrun.js");

class Overrun extends OverrunBase {
  constructor(game) {
    super(game, "Overrun", "Commander 2015", "C15");
  }
}

module.exports = Overrun;
