"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OnewithNothing extends Card {
  constructor(game) {
    super(game, "One with Nothing", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = OnewithNothing;
