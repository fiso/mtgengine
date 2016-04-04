"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PureIntentions extends Card {
  constructor(game) {
    super(game, "Pure Intentions", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = PureIntentions;
