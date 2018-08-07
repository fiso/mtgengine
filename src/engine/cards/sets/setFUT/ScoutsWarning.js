"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScoutsWarning extends UnimplementedCard {
  constructor (game) {
    super(game, "Scout's Warning", "Future Sight", "FUT");
  }
}

module.exports = ScoutsWarning;
