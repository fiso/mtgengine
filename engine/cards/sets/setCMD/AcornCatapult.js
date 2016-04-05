"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AcornCatapult extends UnimplementedCard {
  constructor(game) {
    super(game, "Acorn Catapult", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = AcornCatapult;
