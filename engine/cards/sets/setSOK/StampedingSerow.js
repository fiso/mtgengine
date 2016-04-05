"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StampedingSerow extends UnimplementedCard {
  constructor(game) {
    super(game, "Stampeding Serow", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = StampedingSerow;
