"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OnewithNothing extends UnimplementedCard {
  constructor(game) {
    super(game, "One with Nothing", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = OnewithNothing;
