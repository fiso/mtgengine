"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SavortheMoment extends Card {
  constructor(game) {
    super(game, "Savor the Moment", "Shadowmoor", "SHM");
  }
}

module.exports = SavortheMoment;
