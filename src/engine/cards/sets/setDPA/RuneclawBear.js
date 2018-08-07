"use strict";
const Constants = require ("../../../Constants");
const RuneclawBearBase = require("../setM15/RuneclawBear");

class RuneclawBear extends RuneclawBearBase {
  constructor (game) {
    super(game, "Runeclaw Bear", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = RuneclawBear;
