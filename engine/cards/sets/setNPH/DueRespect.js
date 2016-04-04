"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DueRespect extends Card {
  constructor(game) {
    super(game, "Due Respect", "New Phyrexia", "NPH");
  }
}

module.exports = DueRespect;
