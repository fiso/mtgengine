"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EmbraceMyDiabolicalVision extends UnimplementedCard {
  constructor (game) {
    super(game, "Embrace My Diabolical Vision", "Archenemy", "ARC");
  }
}

module.exports = EmbraceMyDiabolicalVision;
