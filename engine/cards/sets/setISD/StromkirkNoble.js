"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StromkirkNoble extends Card {
  constructor(game) {
    super(game, "Stromkirk Noble", "Innistrad", "ISD");
  }
}

module.exports = StromkirkNoble;
