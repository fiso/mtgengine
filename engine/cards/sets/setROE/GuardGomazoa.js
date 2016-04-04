"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GuardGomazoaBase = require("../setC13/GuardGomazoa.js");

class GuardGomazoa extends GuardGomazoaBase {
  constructor(game) {
    super(game, "Guard Gomazoa", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = GuardGomazoa;
