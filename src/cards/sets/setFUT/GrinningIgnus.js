"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrinningIgnus extends UnimplementedCard {
  constructor (game) {
    super(game, "Grinning Ignus", "Future Sight", "FUT");
  }
}

module.exports = GrinningIgnus;
