"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ReviveBase = require("../set8ED/Revive.js");

class Revive extends ReviveBase {
  constructor(game) {
    super(game, "Revive", "Magic 2013", "M13");
  }
}

module.exports = Revive;
