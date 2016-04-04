"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WarReport extends Card {
  constructor(game) {
    super(game, "War Report", "New Phyrexia", "NPH");
  }
}

module.exports = WarReport;
