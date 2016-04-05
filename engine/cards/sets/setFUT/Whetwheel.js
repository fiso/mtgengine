"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Whetwheel extends UnimplementedCard {
  constructor(game) {
    super(game, "Whetwheel", "Future Sight", "FUT");
  }
}

module.exports = Whetwheel;
