"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FalseProphet extends Card {
  constructor(game) {
    super(game, "False Prophet", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = FalseProphet;
