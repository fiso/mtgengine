"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TheDeadShallServe extends UnimplementedCard {
  constructor (game) {
    super(game, "The Dead Shall Serve", "Archenemy", "ARC");
  }
}

module.exports = TheDeadShallServe;
