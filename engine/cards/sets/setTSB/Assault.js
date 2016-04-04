"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AssaultBase = require("../setINV/Assault.js");

class Assault extends AssaultBase {
  constructor(game) {
    super(game, "Assault", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = Assault;
