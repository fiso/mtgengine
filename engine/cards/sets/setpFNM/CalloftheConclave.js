"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CalloftheConclave extends Card {
  constructor(game) {
    super(game, "Call of the Conclave", "Friday Night Magic", "pFNM");
  }
}

module.exports = CalloftheConclave;
