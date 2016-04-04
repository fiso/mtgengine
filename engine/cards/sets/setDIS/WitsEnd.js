"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WitsEnd extends Card {
  constructor(game) {
    super(game, "Wit's End", "Dissension", "DIS");
  }
}

module.exports = WitsEnd;
