"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AssWhuppinBase = require("../setpREL/AssWhuppin.js");

class AssWhuppin extends AssWhuppinBase {
  constructor(game) {
    super(game, "Ass Whuppin'", "Unhinged", "UNH");
  }
}

module.exports = AssWhuppin;
