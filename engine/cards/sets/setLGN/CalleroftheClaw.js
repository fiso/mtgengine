"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CalleroftheClawBase = require("../setC15/CalleroftheClaw.js");

class CalleroftheClaw extends CalleroftheClawBase {
  constructor(game) {
    super(game, "Caller of the Claw", "Legions", "LGN");
  }
}

module.exports = CalleroftheClaw;
