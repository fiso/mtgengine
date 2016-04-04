"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Acquire extends Card {
  constructor(game) {
    super(game, "Acquire", "Fifth Dawn", "5DN");
  }
}

module.exports = Acquire;
