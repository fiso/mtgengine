"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Hit extends Card {
  constructor(game) {
    super(game, "Hit", "Dissension", "DIS");
  }
}

module.exports = Hit;
