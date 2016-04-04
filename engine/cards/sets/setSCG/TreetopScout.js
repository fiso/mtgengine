"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TreetopScout extends Card {
  constructor(game) {
    super(game, "Treetop Scout", "Scourge", "SCG");
  }
}

module.exports = TreetopScout;
