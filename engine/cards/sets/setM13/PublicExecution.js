"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PublicExecution extends Card {
  constructor(game) {
    super(game, "Public Execution", "Magic 2013", "M13");
  }
}

module.exports = PublicExecution;
