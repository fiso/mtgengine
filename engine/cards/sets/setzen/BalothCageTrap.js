"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BalothCageTrap extends Card {
  constructor(game) {
    super(game, "Baloth Cage Trap", "Zendikar", "ZEN");
  }
}

module.exports = BalothCageTrap;
