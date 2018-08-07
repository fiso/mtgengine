"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PriestofIroas extends UnimplementedCard {
  constructor (game) {
    super(game, "Priest of Iroas", "Theros", "THS");
  }
}

module.exports = PriestofIroas;
