"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SharedTrauma extends Card {
  constructor(game) {
    super(game, "Shared Trauma", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = SharedTrauma;
