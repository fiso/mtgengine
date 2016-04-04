"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NullCaller extends Card {
  constructor(game) {
    super(game, "Null Caller", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = NullCaller;
