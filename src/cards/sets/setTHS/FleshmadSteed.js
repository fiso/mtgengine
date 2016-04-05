"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FleshmadSteed extends UnimplementedCard {
  constructor(game) {
    super(game, "Fleshmad Steed", "Theros", "THS");
  }
}

module.exports = FleshmadSteed;
