"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SafeHaven extends Card {
  constructor(game) {
    super(game, "Safe Haven", "Chronicles", "CHR");
  }
}

module.exports = SafeHaven;
