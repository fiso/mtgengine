"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Worldfire extends Card {
  constructor(game) {
    super(game, "Worldfire", "Magic 2013", "M13");
  }
}

module.exports = Worldfire;
