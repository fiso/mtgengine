"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HomingSliver extends UnimplementedCard {
  constructor (game) {
    super(game, "Homing Sliver", "Future Sight", "FUT");
  }
}

module.exports = HomingSliver;
