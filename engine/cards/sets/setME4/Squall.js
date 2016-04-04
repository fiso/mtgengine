"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Squall extends Card {
  constructor(game) {
    super(game, "Squall", "Masters Edition IV", "ME4");
  }
}

module.exports = Squall;
