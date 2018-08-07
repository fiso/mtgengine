"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AcornCatapult extends UnimplementedCard {
  constructor (game) {
    super(game, "Acorn Catapult", "Commander 2011", "CMD");
  }
}

module.exports = AcornCatapult;
