"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Rise extends Card {
  constructor(game) {
    super(game, "Rise", "Dissension", "DIS");
  }
}

module.exports = Rise;
