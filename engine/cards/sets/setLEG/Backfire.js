"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BackfireBase = require("../set4ED/Backfire.js");

class Backfire extends BackfireBase {
  constructor(game) {
    super(game, "Backfire", "Legends", "LEG");
  }
}

module.exports = Backfire;
