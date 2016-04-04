"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CometStorm extends Card {
  constructor(game) {
    super(game, "Comet Storm", "Commander 2015", "C15");
  }
}

module.exports = CometStorm;
