"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GracefulAdept extends Card {
  constructor(game) {
    super(game, "Graceful Adept", "Champions of Kamigawa", "CHK");
  }
}

module.exports = GracefulAdept;
