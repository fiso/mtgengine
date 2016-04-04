"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Nice extends Card {
  constructor(game) {
    super(game, "Nice", "Happy Holidays", "pHHO");
  }
}

module.exports = Nice;
