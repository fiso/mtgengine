"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GreaterStoneSpirit extends Card {
  constructor(game) {
    super(game, "Greater Stone Spirit", "Coldsnap", "CSP");
  }
}

module.exports = GreaterStoneSpirit;
