"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EmberSwallower extends UnimplementedCard {
  constructor (game) {
    super(game, "Ember Swallower", "Theros", "THS");
  }
}

module.exports = EmberSwallower;
