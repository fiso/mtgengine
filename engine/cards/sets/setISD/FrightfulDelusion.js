"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FrightfulDelusion extends Card {
  constructor(game) {
    super(game, "Frightful Delusion", "Innistrad", "ISD");
  }
}

module.exports = FrightfulDelusion;
