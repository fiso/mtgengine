"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PennonBlade extends Card {
  constructor(game) {
    super(game, "Pennon Blade", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = PennonBlade;
