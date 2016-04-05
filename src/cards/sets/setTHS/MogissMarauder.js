"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MogissMarauder extends UnimplementedCard {
  constructor(game) {
    super(game, "Mogis's Marauder", "Theros", "THS");
  }
}

module.exports = MogissMarauder;
