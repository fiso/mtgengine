"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Delay extends UnimplementedCard {
  constructor (game) {
    super(game, "Delay", "Future Sight", "FUT");
  }
}

module.exports = Delay;
