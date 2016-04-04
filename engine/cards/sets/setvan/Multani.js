"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Multani extends Card {
  constructor(game) {
    super(game, "Multani", "Vanguard", "VAN");
  }
}

module.exports = Multani;
