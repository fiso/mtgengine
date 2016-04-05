"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SinkintoTakenuma extends UnimplementedCard {
  constructor(game) {
    super(game, "Sink into Takenuma", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = SinkintoTakenuma;
