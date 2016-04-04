"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Pure extends Card {
  constructor(game) {
    super(game, "Pure", "Dissension", "DIS");
  }
}

module.exports = Pure;
