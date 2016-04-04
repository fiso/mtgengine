"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BodySnatcher extends Card {
  constructor(game) {
    super(game, "Body Snatcher", "Urza's Destiny", "UDS");
  }
}

module.exports = BodySnatcher;
