"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BrassMan extends Card {
  constructor(game) {
    super(game, "Brass Man", "Arabian Nights", "ARN");
  }
}

module.exports = BrassMan;
