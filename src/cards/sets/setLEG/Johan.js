"use strict";
const Constants = require ("../../../Constants");
const JohanBase = require("../setCHR/Johan");

class Johan extends JohanBase {
  constructor (game) {
    super(game, "Johan", "Legends", "LEG");
  }
}

module.exports = Johan;
