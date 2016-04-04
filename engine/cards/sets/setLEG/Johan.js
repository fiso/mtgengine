"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const JohanBase = require("../setCHR/Johan.js");

class Johan extends JohanBase {
  constructor(game) {
    super(game, "Johan", "Legends", "LEG");
  }
}

module.exports = Johan;
