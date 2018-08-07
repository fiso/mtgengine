"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FellwarStone extends UnimplementedCard {
  constructor (game) {
    super(game, "Fellwar Stone", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = FellwarStone;
