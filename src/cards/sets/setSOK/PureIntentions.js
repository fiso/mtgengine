"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PureIntentions extends UnimplementedCard {
  constructor (game) {
    super(game, "Pure Intentions", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = PureIntentions;
